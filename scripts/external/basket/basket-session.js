/*!
* basket-session.js
* vim: ts=3
* v0.5.2 - 2015-02-07
* http://addyosmani.github.com/basket.js
* (c) Addy Osmani;  License
* Created by: Addy Osmani, Sindre Sorhus, Andrée Hansson, Mat Scales
* Contributors: Ironsjp, Mathias Bynens, Rick Waldron, Felipe Morais
* Uses rsvp.js, https://github.com/tildeio/rsvp.js
*/(function( window, document ) {
	'use strict';

	var head = document.head || document.getElementsByTagName('head')[0];
	var storagePrefix = 'basket-';
	var defaultExpiration = 5000;
	var inBasket = [];

	var addLocalStorage = function( key, storeObj ) {
		try {
			sessionStorage.setItem( storagePrefix + key, JSON.stringify( storeObj ) );
			return true;
		} catch( e ) {
			if ( e.name.toUpperCase().indexOf('QUOTA') >= 0 ) {
				var item;
				var tempScripts = [];

				for ( item in sessionStorage ) {
					if ( item.indexOf( storagePrefix ) === 0 ) {
						tempScripts.push( JSON.parse( sessionStorage[ item ] ) );
					}
				}

				if ( tempScripts.length ) {
					tempScripts.sort(function( a, b ) {
						return a.stamp - b.stamp;
					});

					basketSession.remove( tempScripts[ 0 ].key );

					return addLocalStorage( key, storeObj );

				} else {
					// no files to remove. Larger than available quota
					return;
				}

			} else {
				// some other error
				return;
			}
		}

	};

	var getUrl = function( url, filetype ) {
console.log("GETURL", url, filetype);
		var promise = new RSVP.Promise( function( resolve, reject ){

			var xhr = new XMLHttpRequest();
			xhr.open( 'GET', url );
			if (filetype === "binary") {
				xhr.responseType = "arraybuffer";
			}

			xhr.onreadystatechange = 
				function() {
					if (xhr.readyState !== XMLHttpRequest.DONE) {
						return;
					}
					if (xhr.status !== 200) {
						return;
					}
console.log("DOWNLOADED SCRIPT", url);
					if (filetype !== "binary") {
						resolve( {
							content: xhr.responseText,
							type: xhr.getResponseHeader('content-type')
						} );
					} else {
						resolve( {
							content: Base64Binary.btoa(xhr.response),
							type: xhr.getResponseHeader('content-type')
						} );
					}
				};

			// By default XHRs never timeout, and even Chrome doesn't implement the
			// spec for xhr.timeout. So we do it ourselves.
			setTimeout( function () {
				if( xhr.readyState < 4 ) {
					xhr.abort();
				}
			}, basketSession.timeout );

			xhr.send();
		});

		return promise;
	};

	var saveUrl = function( obj, filetype ) {
		return getUrl( obj.url, filetype ).then( function( result ) {
			var storeObj = wrapStoreData( obj, result );

			if (!obj.skipCache) {
				addLocalStorage( obj.key , storeObj );
			}

			return storeObj;
		});
	};

	var wrapStoreData = function( obj, data ) {
		var now = +new Date();
		obj.data = data.content;
		obj.originalType = data.type;
		obj.type = obj.type || data.type;
		obj.skipCache = obj.skipCache || false;
		obj.stamp = now;
		obj.expire = now + ( ( obj.expire || defaultExpiration ) * 60 * 60 * 1000 );

		return obj;
	};

	var isCacheValid = function(source, obj) {
		var result = !source;
		result |= source.expire - +new Date() < 0;
		result |= obj.unique !== source.unique;
		result |= basketSession.isValidItem && !basketSession.isValidItem(source, obj);
		return result;
	};

	var handleStackObject = function( obj ) {
		var source, promise, shouldFetch;

		if ( !obj.url ) {
			return;
		}

		obj.key =  ( obj.key || obj.url );
		source = basketSession.get( obj.key );

		obj.execute = obj.execute !== false;
		var binary = obj.binary ? "binary" : false;

		shouldFetch = isCacheValid(source, obj);

		if( obj.live || shouldFetch ) {
			if ( obj.unique ) {
				// set parameter to prevent browser cache
				obj.url += ( ( obj.url.indexOf('?') > 0 ) ? '&' : '?' ) + 'basket-unique=' + obj.unique;
			}
			promise = saveUrl( obj, binary );

			if( obj.live && !shouldFetch ) {
				promise = promise
					.then( function( result ) {
						// If we succeed, just return the value
						// RSVP doesn't have a .fail convenience method
						return result;
					}, function() {
						return source;
					});
			}
		} else {
			source.type = obj.type || source.originalType;
			source.execute = obj.execute;
			promise = new RSVP.Promise( function( resolve ){
				resolve( source );
			});
		}

		return promise;
	};

	var injectScript = function( obj ) {
		var script = document.createElement('script');
		script.defer = true;
		// Have to use .text, since we support IE8,
		// which won't allow appending to a script
		script.text = obj.data;
		head.appendChild( script );
	};

	var handlers = {
		'default': injectScript
	};

	var execute = function( obj ) {
		if( obj.type && handlers[ obj.type ] ) {
			return handlers[ obj.type ]( obj );
		}

		return handlers['default']( obj ); // 'default' is a reserved word
	};

	var performActions = function( resources ) {
		return resources.map( function( obj ) {
			if( obj.execute ) {
				execute( obj );
			}

			return obj;
		} );
	};

	var fetch = function() {
		var i, l, promises = [];

		for ( i = 0, l = arguments.length; i < l; i++ ) {
			promises.push( handleStackObject( arguments[ i ] ) );
		}

		return RSVP.all( promises );
	};

	var thenRequire = function() {
		var resources = fetch.apply( null, arguments );
		var promise = this.then( function() {
			return resources;
		}).then( performActions );
		promise.thenRequire = thenRequire;
		return promise;
	};

	window.basketSession = {
		require: function() {
console.log("RUNNING REQUIRE IN BASKETSESSION");
			for ( var a = 0, l = arguments.length; a < l; a++ ) {
				arguments[a].execute = arguments[a].execute !== false;

				if ( arguments[a].once && inBasket.indexOf(arguments[a].url) >= 0 ) {
					arguments[a].execute = false;
				} else if ( arguments[a].execute !== false && inBasket.indexOf(arguments[a].url) < 0 ) {  
					inBasket.push(arguments[a].url);
				}
			}
							   
			var promise = fetch.apply( null, arguments ).then( performActions );

			promise.thenRequire = thenRequire;
			return promise;
		},

		remove: function( key ) {
			sessionStorage.removeItem( storagePrefix + key );
			return this;
		},

		get: function( key ) {
			var item = sessionStorage.getItem( storagePrefix + key );
			try	{
				return JSON.parse( item || 'false' );
			} catch( e ) {
				return false;
			}
		},

		clear: function( expired ) {
			var item, key;
			var now = +new Date();

			for ( item in sessionStorage ) {
				key = item.split( storagePrefix )[ 1 ];
				if ( key && ( !expired || this.get( key ).expire <= now ) ) {
					this.remove( key );
				}
			}

			return this;
		},

		isValidItem: null,

		timeout: 5000,

		addHandler: function( types, handler ) {
			if( !Array.isArray( types ) ) {
				types = [ types ];
			}
			types.forEach( function( type ) {
				handlers[ type ] = handler;
			});
		},

		removeHandler: function( types ) {
			basketSession.addHandler( types, undefined );
		}
	};

	// delete expired keys
	basketSession.clear( true );

})( this, document );
