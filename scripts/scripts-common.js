---
---
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Thu Aug 21 12:59:01 PDT 2014
// Last Modified: Sat Sep 22 13:15:27 PDT 2018
// Filename:      .../scripts/scripts-common.js
// Web Address:   https://www.tassomusic.org/scripts/scripts-common.js
// Syntax:        JavaScript 1.8/ECMAScript 5
// vim:				ts=3: ft=javascript
//
// Description:   Site-wide useful JavaScript functions common to all pages.
//

// GLOBAL VARIABLES:
var CGI = {};                              // CGI parameters from URL
var WORKLIST;										 // Master index of works in JRP database.
var WORKLISTrecent = [];						 // List of works reverse sorted by add date.
var WORKLISTjrpid  = {};						 // Hash of works by JRP ID.
var BASEADDR       = window.location.host; // Base address of URL.
var PDFTARGET      = 'target="new"';		 // Display PDF files in separate tab/window.
var AUDIO          = null;						 // HTML5 audio interface ID.
var AUDIOjrpid     = '';  						 // currently playing audio file.
var AUDIOid        = '';                   // currently playing audio button.

var CYCLES = {% include cycles/cycle-list.json %}
var RCYCLE = {};
for (var i=0; i<CYCLES.length; i++) {
	for (var j=0; j<CYCLES[i].length; j++) {
		RCYCLE[CYCLES[i][j]] = {};
		RCYCLE[CYCLES[i][j]].cycle    = CYCLES[i];
		RCYCLE[CYCLES[i][j]].count    = CYCLES[i].length;
		RCYCLE[CYCLES[i][j]].sequence = j+1;
		
	}
}

var LITLIST;            // list of literary sources
var LITMANU;
var LITPRINT;
var WORKLIST;           // list of musical settings
var LASTTIME = -1;

var TASSODATA;          // master data structure for database
var RSETTINGS;          // setting entries indexed by catalog number


// VARIABLES EXTRACTED FROM TASSODATA object:

var RIMESETTINGLIST;    // list of poems without verse contents
                        // from TASSODATA.SETTINGS.RIME_SETTINGS
var GERUSETTINGLIST;    // list of poems without verse contents
                        // from TASSODATA.SETTINGS.GERUSALEMME_SETTINGS
var AMINTASETTINGLIST;  // list of Aminta settings
                        // from TASSODATA.SETTINGS.AMINTA_SETTINGS
var OTHERSETTINGLIST;   // list of other settings
                        // from TASSODATA.SETTINGS.OTHER_SETTINGS

// subdivisions of the othersetting list:
var ECLOGHESETTINGLIST;
var RINALDOSETTINGLIST;
var LAGRIMESETTINGLIST;
var TORRISMONDOSETTINGLIST;
var CONQUISTATASETTINGLIST;

var ALLSETTINGLIST;     // collapse of all settings in TASSODATA.SETTINGS object


// sorces of poems, to be accessed by RIME number.
var SOURCES;            // TASSODATA.SOURCES.SOURCE;

var SCORES;             // TASSODATA.SCORES.SCORE;

// verses of poems
var RIMEVERSELIST;        // list of poems with rime verse contents
								  // TASSODATA.VERSES.RIME_VERSES.VERSEDATA;
var AMINTAVERSELIST;      // list of poems with aminta verse contents
								  // TASSODATA.VERSES.AMINTA_VERSES.VERSEDATA;
var GERUVERSELIST;        // list of poems with Gerusalemme liberata verse contents
								  // TASSODATA.VERSES.GERUSALEMME_VERSES.VERSEDATA;
var OTHERVERSELIST;       // list of poems with Gerusalemme liberata verse contents
								  // TASSODATA.VERSES.OTHER_VERSES.VERSEDATA;
var ECLOGHEVERSELIST;     // list of poems with Ecloghe verse contents
								  // TASSODATA.VERSES.ECLOGHE_VERSES.VERSEDATA;
var RINALDOVERSELIST;     // list of poems with Rinaldo verse contents
								  // TASSODATA.VERSES.RINALDO_VERSES.VERSEDATA;
var TORRISMONDOVERSELIST; // list of poems with Torrismondo verse contents
								  // TASSODATA.VERSES.TORRISMONDO_VERSES.VERSEDATA;
var LAGRIMEVERSELIST;     // list of poems with Lagrime verse contents
								  // TASSODATA.VERSES.LAGRIME_VERSES.VERSEDATA;
var CONQUISTATAVERSELIST; // list of poems with Gerusalemme conquistata verse contents
								  // TASSODATA.VERSES.CONQUISTATA_VERSES.VERSEDATA;
var ALLVERSELIST;         // Collapse of all verse lists.


// List of Key Codes.  More can be extracted from this page:
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
const AKey            = 65; // Letters
const BKey            = 66;
const CKey            = 67;
const DKey            = 68;
const EKey            = 69;
const FKey            = 70;
const GKey            = 71;
const HKey            = 72;
const IKey            = 73;
const JKey            = 74;
const KKey            = 75;
const LKey            = 76;
const MKey            = 77;
const NKey            = 78;
const OKey            = 79;
const PKey            = 80;
const QKey            = 81;
const RKey            = 82;
const SKey            = 83;
const TKey            = 84;
const UKey            = 85;
const VKey            = 86;
const WKey            = 87;
const XKey            = 88;
const YKey            = 89;
const ZKey            = 90;
const ZeroKey         = 48; // Numbers
const OneKey          = 49;
const TwoKey          = 50;
const ThreeKey        = 51;
const FourKey         = 52;
const FiveKey         = 53;
const SixKey          = 54;
const SevenKey        = 55;
const EightKey        = 56;
const NineKey         = 57;
const BackspaceKey    =  8; // Other
const TabKey          =  9;
const EnterKey        = 13;
const EscKey          = 27;
const SpaceKey        = 32;
const EqualsKey       = 187;
const MinusKey        = 189;
const PageUpKey       = 33;
const PageDownKey     = 34;
const EndKey          = 35;
const HomeKey         = 36;
const DeleteKey       = 46;
const ControlKey      = 17; // State keys
const AltKey          = 18;
const ShiftKey        = 16;
const CommandLeftKey  = 91; // or Window key in MSWindows, and Meta key in Unix
const CommandRightKey = 93;
const F1Key           = 112; // Function keys
const F2Key           = 113;
const F3Key           = 114;
const F4Key           = 115;
const F5Key           = 116;
const F6Key           = 117;
const F7Key           = 118;
const F8Key           = 119;
const F9Key           = 120;
const F10Key          = 121;
const SlashKey        = 191;
const SquareLeftKey   = 219;
const SquareRightKey  = 221;

// Arrows:
const UpArrowKey      = 38;    // maybe also 30 & 57373
const DownArrowKey    = 40;    // maybe also 31 & 57374
const LeftArrowKey    = 37;    // maybe also 28 & 57375
const RightArrowKey   = 39;    // maybe also 29 & 57376



//////////////////////////////
//
// InitializeWorklistFlat -- Create a flattened list of works.  Two 
//    (global) objects will be created from the WORKLIST object: 
//    (1) WORKLISTrecent -- an array which is a list of works 
//        reverse-sorted by date added.   Also stored in 
//        sessionStorage.WORKLISTrecent.
//    (2) WORKLISTjrpid -- an object which contains works indexed by
//    JRP ID.  Also stored in sessionStorage.WORKLISTjrpid.
//

function InitializeWorklistFlat() {

   if ((WORKLISTrecent != null) && (WORKLISTrecent.length != 0)) {
      // WORILISTjrpid is presumed to be in a similar state.
      return;
   }

   InitializeWorklist();

   WORKLISTrecent = [];
   WORKLISTjrpid  = {};

   var i;
   var works;
   var jrpid;

   for (i=0; i<WORKLIST.length; i++) {
      works = WORKLIST[i].works;
      for (j=0; j<works.length; j++) {
         if (typeof works[j].comshort === 'undefined') {
            works[j].comshort = WORKLIST[i].comshort;
         }
         WORKLISTrecent.push(works[j]);
         jrpid = works[j].id;
         WORKLISTjrpid[jrpid] = works[j];
      }
   }

   WORKLISTrecent.sort(byReverseAddDate);
}



//////////////////////////////
//
// byReverseAddDate -- sort a work by reverse add date.
//


function byReverseAddDate(a, b) {
   var date1 = a.ud;
   var date2 = b.ud;

	if (!date1) { date1 = a.ad; }
	if (!date2) { date2 = b.ad; }
	if (!date1) { date1 = 0; }
	if (!date2) { date2 = 0; }
   if (date1 > date2) { return -1; } 
   if (date1 < date2) { return +1; }
   if (a.id  < b.id)  { return -1; }
   if (a.id  > b.id)  { return +1; }

   return 0;
}



//////////////////////////////
//
// GetDataFile -- download a data file from the server and keep it for
//    use later.
//

function GetDataFile(jrpid, prefix, action) {
   var variable = prefix + jrpid;

   if (typeof sessionStorage[variable] != 'undefined') {
      return sessionStorage[variable];
   }
   
   InitializeWorklistFlat();

   // Get the first section's incipit if a multi-section work:
   var pieces = jrpid.match(/^([A-Z][a-z][a-z]\d+[.\d]*)([a-z]*.*)/);
   var workid = pieces[1];
   var work = WORKLISTjrpid[workid];
   if (work == null) {
      work = WORKLISTjrpid[workid + pieces[2]];
   }
   if (work == null) {
      console.log('Error: ' + workid + ' not in WORKLISTjrpid.');
      return;
   }
   var i;
   if (typeof work.sections === 'undefined') {
      jrpid = workid;
   }

   // content is not in sessionStorage, so download, store, and return.
   var imagedata = ReadFile('https://' + BASEADDR + '/data?a=' + action + '&f=' + jrpid);
   sessionStorage[variable] = imagedata;
   return imagedata;
}



//////////////////////////////
//
// GetDataFileAsync -- get a data file asynchronously.
//

function GetDataFileAsync(jrpid, prefix, action, callback) {
   var variable = prefix + jrpid;

   if (typeof sessionStorage[variable] != 'undefined') {
      return sessionStorage[variable];
   }
   
   InitializeWorklistFlat();

   // Get the first section's incipit if a multi-section work:
   var pieces = jrpid.match(/^([A-Z][a-z][a-z]\d+[.\d]*)([a-z]*.*)/);
   var workid = pieces[1];
   var work = WORKLISTjrpid[workid];
   if (work == null) {
      work = WORKLISTjrpid[workid + pieces[2]];
   }
   if (work == null) {
      console.log('Error2: ' + workid + ' not in WORKLISTjrpid.');
      return;
   }
   var i;
   if (typeof work.sections === 'undefined') {
      jrpid = workid;
   }

   // content is not in sessionStorage, so download, store, and return.
   ReadFileAsync('https://' + BASEADDR + '/data?a=' + action + '&f=' + jrpid, callback);
   //sessionStorage[variable] = imagedata;
   // return imagedata;
}



//////////////////////////////
//
// ReadFile -- Download URL content which is returned as a string.
//      The URL must be on the same domain as index.html due to
//      JavaScript Same-Origin policy:
//         https://en.wikipedia.org/wiki/Same-origin_policy
// XMLHttpRequest object:
//         https://www.w3.org/TR/2007/WD-XMLHttpRequest-20070618
//         https://xhr.spec.whatwg.org
//         
//         See:
//  https://codingforums.com/ajax-design/123705-make-script-wait-until-request-comes-back.html
//

function ReadFile(url) {
   var request = new XMLHttpRequest();

   request.open('GET', url, false);
   request.send(null);

   var string = request.responseText;
   if ((string.length < 1000) && string.match(/Not Found/)) {
      return '';
   } else {
      return request.responseText;
   }
}



function ReadFileAsync(url, callback) {
   var request = new XMLHttpRequest();
   request.open('GET', url, true);
   request.onload = function (e) {
      if (this.readyState == 4) {
         callback(this.responseText);
      }
   };
   request.onerror = function(e) {
      console.error(request.statusText);
   };
   request.send(null);
}



//////////////////////////////
//
// GetCgiParameters -- Returns an associative array containing the
//     page's URL's CGI parameters
//

function GetCgiParameters() {
   var url = window.location.search.substring(1);
   var output = {};
   var settings = url.split('&');
   for (var i=0; i<settings.length; i++) {
      var pair = settings[i].split('=');
      pair[0] = decodeURIComponent(pair[0]);
      pair[1] = decodeURIComponent(pair[1]);
      if (typeof output[pair[0]] === 'undefined') {
         output[pair[0]] = pair[1];
      } else if (typeof output[pair[0]] === 'string') {
         var arr = [ output[pair[0]], pair[1] ];
         output[pair[0]] = arr;
      } else {
         output[pair[0]].push(pair[1]);
      }
   }
   return output;
}




//////////////////////////////
//
// GetComposerOptions -- Return an option list of composers in the worklist.
//    This is used to fill in the Composer/Repertory section list in forms
//    on various webpages.
//

function GetComposerOptions() {
   InitializeWorklist();
   var output = '';
   var longname;
   var abbr;
   var i;

   for (i=0; i<WORKLIST.length; i++) {
      longname  = WORKLIST[i].comlong;
      shortname = WORKLIST[i].comshort;
      abbr      = WORKLIST[i].repid;
      output += '<option value="' + abbr + '">';
      // output += longname + '</option>\n';
      output += shortname + '</option>\n';
      if (abbr == 'Jos') {
         output += '<option value="Joa">Josquin (secure)</option>\n';
         output += '<option value="Job">';
         output += 'Josquin&nbsp;';
         output += '(not&nbsp;secure)</option>\n';
      }
   }
   return output;
}



//////////////////////////////
//
// GetGenreOptions -- Return an option list of genres.  
//     This is used to fill in the Composer/Repertory section list 
//     in forms on various webpages.  If there is an input repe
//     Mass, Motet, or Song.
//

function GetGenreOptions(repertory) {
   if ((typeof repertory === 'undefined') || 
			(repertory == null) || (repertory == '')) {
	   // Avoiding displaying the genre list without a repertory.
	   // This is because analyses mostly need to be limited to a single repertory
	   // So that not too many images are shown on the same page.
		var opts = '<option value="mass">Masses</option>\n';
		opts += '<option value="motet">Motets</option>\n';
		opts += '<option value="song">Songs</option>\n';
      return opts;
   }

   InitializeWorklist();
   var output = '';
   var longname;
   var abbr;
   var i, j;
   var rep;
   var gen;

   var genlist1 = {};

   for (i=0; i<WORKLIST.length; i++) {
		rep = WORKLIST[i].repid;
		if (!repertory.match(/^\s*$/) && (!rep.match(repertory))) {
			continue;
		}
      gen = WORKLIST[i].genres;
      for (j=0; j<gen.length; j++) {
			genlist1[gen[j].name] = gen[j].name;
		}
	}
   var genlist2 = [];
   for (entry in genlist1) genlist2.push(entry);
	genlist2.sort();

	var output = '';
   for (i=0; i<genlist2.length; i++) {
      output += '<option value="' + genlist2[i] + '">';
	   if (genlist2[i].match('mass')) {
			output += 'Masses';
	   } else if (genlist2[i].match('motet')) {
			output += 'Motets';
	   } else if (genlist2[i].match('song')) {
			output += 'Songs';
		} else {
			output += genlist2[i];
		}
		output += '</option>\n';
   }
   return output;
}



//////////////////////////////
//
// GetGenreBrowseOptions -- Return an option list of genres.  
//     This is used to fill in the Composer/Repertory section list 
//     in forms on various webpages.  If there is an input repe
//     Mass, Motet, or Song.
//

function GetGenreBrowseOptions() {
   InitializeWorklist();
   var output = '';
   var longname;
   var abbr;
   var i, j;
   var rep;
   var gen;

   var genlist1 = {};

   for (i=0; i<WORKLIST.length; i++) {
		rep = WORKLIST[i].repid;
      gen = WORKLIST[i].genres;
      for (j=0; j<gen.length; j++) {
			genlist1[gen[j].name] = gen[j].name;
		}
	}
   var genlist2 = [];
   for (entry in genlist1) genlist2.push(entry);
	genlist2.sort();

	var output = '';
   for (i=0; i<genlist2.length; i++) {
      output += '<option value="' + genlist2[i] + '">';
	   if (genlist2[i].match('mass')) {
			output += 'Masses';
	   } else if (genlist2[i].match('motet')) {
			output += 'Motets';
	   } else if (genlist2[i].match('song')) {
			output += 'Songs';
		} else {
			output += genlist2[i];
		}
		output += '</option>\n';
   }
   return output;
}



//////////////////////////////
//
// GetWorkOptions -- Return an option list of works (for a specific
//     repertory and genre.    The repertory is required, the genre
//     is optional (show all works regardless of genre in that case).
//     This is used to fill in the Work section list in forms on 
//     various webpages.  
//

function GetWorkOptions(repertory, genre) {
   if ((typeof repertory === 'undefined') || (repertory == null)) {
      return '';
	}

   if ((typeof genre === 'undefined') || (genre == null)) {
      genre = '';
   }
   InitializeWorklist();
   var output = '';
   var longname;
   var abbr;
   var i, j;
   var works;

   var output = '';
   for (i=0; i<WORKLIST.length; i++) {
		if (!repertory.match(WORKLIST[i].repid)) {
			continue;
		}
		works = WORKLIST[i].works;
      for (j=0; j<works.length; j++) {
			if (!genre.match(/^\s*$/) && !genre.match(works[j].genre)) {
				continue;
			}
      	output += '<option value="' + works[j].id + '">';
			output += works[j].title;
			if (typeof works[j].variant !== 'undefined') {
				output += ' (' + works[j].variant + ' )';
			}
			output += '</option>\n';
		}
	}
	return output;
}



//////////////////////////////
//
// GetVoiceOptions -- Return an option list of voices.  This is used to
//     fill in the Composer/Repertory section list in forms on various
//     webpages.
//

function GetVoiceOptions() {
   output = '';
   output += '<option value="3">3 voices</option>\n';
   output += '<option value="4">4 voices</option>\n';
   output += '<option value="5+">more voices</option>\n';
   return output;
}



//////////////////////////////
//
// ClearBrowseFields -- Erase the browse filter options (useful to force
//     display of the Browse home page).
//

function ClearBrowseFields() {
   sessionStorage.BROWSEcomposers = '';
   sessionStorage.BROWSEgenres    = '';
   sessionStorage.BROWSEvoices    = '';
   sessionStorage.BROWSEtitlebox  = '';
}



//////////////////////////////
//
// ClearWorklist --
//

function ClearWorklist() {
	sessionStorage.removeItem('WORKLIST');
	sessionStorage.removeItem('WORKLISTrefreshtime');
  	sessionStorage.removeItem('WORKjrpid');
  	sessionStorage.removeItem('RECENTLYADDEDHTML');
}



/*
//////////////////////////////
//
// UpdateEzMark --
//

function UpdateEzMark() {
   $('select').not('.tricky').select2({
      width: 'off'
   });

   $('select.tricky').select2({
      width: 'off',
      containerCssClass: 'tricky-choice',
      dropdownCssClass: 'tricky-dropdown',
      dropdownAutoWidth: true
   });

//   $('input[type=checkbox]').ezMark();
//   $('input[type=radio]').ezMark();
}
*/



//////////////////////////////
//
// PlayAudioFile -- play/pause an audio file.
//

function PlayAudioFile(jrpid, element, starttime) {
	// The JRPID is not the same as the currently playing file
	// (or there is no file playing).  So start the new one.
	if (!AUDIO) {
	   AUDIO = document.getElementById('audio');
   }
	if (!AUDIO) {
		AUDIO = document.createElement("AUDIO");
		AUDIO.id = "audio";
		document.body.appendChild(AUDIO);
	}
   if (!AUDIO) {
		console.log('Error: could not set up audio interface\n');
		return false;
   }
	AUDIO.setAttribute('controls', 'controls');
	AUDIO.style.position = 'fixed';
	AUDIO.style.bottom = '0';
	AUDIO.style.right = '0';
	AUDIO.style.zIndex = '1';

	AUDIO.onpause = function () {
		TurnOffAllNotes();
	}


	var audiobutton;
   if (jrpid != AUDIOjrpid) {
		if (!!AUDIOid) {
			// turn of previously playing audio file:
			audiobutton = document.getElementById(AUDIOid);
			if (!!audiobutton && !!audiobutton.className) {
				if (audiobutton.className.match(/mp3/)) {
					audiobutton.className = 'mp3play';
				} else {
					audiobutton.className = 'play';
				}
			}
		}
		AUDIO.removeAttribute('controls');
      AUDIO.pause();
		
      AUDIOid = element.id;
		var source = '';
		// Can't have seekable dynamic content in audio element:
		//source += '<source src="/data?a=mp3&id=' + jrpid + '" ';
		if (window.location.href.match(/tasso/i)) {
			source += '<source src="https://josquin.stanford.edu/audio/mp3/' + jrpid + '.mp3" ';
		} else {
			source += '<source src="https://josquin.stanford.edu/audio/mp3/' + jrpid + '.mp3" ';
		}
		source += 'type="audio/mpeg"/>\n';
		AUDIO.innerHTML = source;

		AUDIOjrpid = jrpid;
		AUDIO.load();
		if (starttime) {
			AUDIO.currentTime = starttime;
		}

		AUDIO.play();
		InitializeTimemap();

		AUDIO.setAttribute('controls', 'controls');
		var newelement = document.getElementById(AUDIOid);

		AUDIO.addEventListener("ended", function() {
			newelement.className = "play";
		});

		if (newelement.className.match(/mp3/)) {
			newelement.className = 'mp3pause';
		} else {
			newelement.className = 'pause';
		}

		return;
	}


	// The audio file is the same, so start it or pause it depending
	// on its current state:
	if (AUDIO.paused) {
		audiobutton = document.getElementById(AUDIOid);
 		if (!audiobutton) {
			return;
		}

		if (audiobutton.className.match(/mp3/)) {
			audiobutton.className = 'mp3play';
		} else {
			audiobutton.className = 'play';
		}
		AUDIO.play();
		InitializeTimemap();
		AUDIO.setAttribute('controls', 'controls');
	} else {
		audiobutton = document.getElementById(AUDIOid);
 		if (!audiobutton) {
			return;
		}

		if (audiobutton.className.match(/mp3/)) {
			audiobutton.className = 'mp3pause';
		} else {
			audiobutton.className = 'pause';
		}
		if (element.className.match(/mp3/)) {
			element.className = 'mp3play';
		} else {
			element.className = 'play';
		}
		AUDIO.pause();
		AUDIO.removeAttribute('controls');
	}
}


//////////////////////////////
//
// InitializeTimemap --
//

function InitializeTimemap() {
	if (typeof REFRESH === "undefined") {
		return;
	}
	var increment = 20;
	REFRESH = setInterval(function() {
		if (AUDIO && AUDIO.paused) {
			clearInterval(REFRESH);
			return;
		}
		if (!AUDIO) {
			clearInterval(REFRESH);
			return;
		}
		var currenttime = AUDIO.currentTime;
		CheckTimeMap(TIMEMAP[ID], QEVENTS, currenttime, increment/1000.0 * 2);
	}, increment);
}



//////////////////////////////
//
// CheckTimeMap --
//

function CheckTimeMap(timemap, events, currenttime, increment) {
	var target = null;
	var diff;
	for (var i=0; i<timemap.length; i++) {
		if (Math.abs(timemap[i].tstamp - currenttime) < increment) {
			target = timemap[i];
		}
	}

	if (!target) {
		return;
	}

	if (target.tstamp == LASTTIME) {
		return;
	}
	LASTTIME = target.tstamp;
	// console.log("TIMEENTRY", target);
	CheckEventMap(target.qstamp, events);
}



//////////////////////////////
//
// CheckEventMap --
//

function CheckEventMap(etime, events) {
	for (var i=0; i<events.length; i++) {
		if (Math.abs(etime - events[i].qstamp) < 0.01) {
			ProcessNoteEvents(events[i]);
		}
	}
}


//////////////////////////////
//
// ProcessNoteEvents --
//

function ProcessNoteEvents(event) {
	var ons = event.on;
	var offs = event.off;
	var i;

	for (i=0; i<ons.length; i++) {
		// ons[i].style.stroke = "red";
		// ons[i].style.fill = "red";
		// have to re-find on page in case the image has changed:
		var xon = document.querySelector("#" + ons[i].id);
		xon.style.fill = "red";
	}

	for (i=0; i<offs.length; i++) {
		// have to re-find on page in case the image has changed:
		var xoff = document.querySelector("#" + offs[i].id);
		xoff.style.fill = "";
	}
}



//////////////////////////////
//
// TurnOffAllNotes --
//

function TurnOffAllNotes() {
	var list = document.querySelectorAll("svg g[id^='note-']");
	for (var i=0; i<list.length; i++) {
		list[i].style.fill = "";
	}
}



//////////////////////////////
//
// ClearWorklistCache --
//

function ClearWorklistCache() {
   sessionStorage.removeItem('WORKLIST');
   sessionStorage.removeItem('WORKLISTrefreshtime');
   sessionStorage.removeItem('WORKjrpid');
   sessionStorage.removeItem('RECENTLYADDEDHTML');
}



//////////////////////////////
//
// audioStoppedAction -- 
//

function audioStoppedAction(event) {



}



//////////////////////////////
//
// DisplayCriticalNotes --
//

function DisplayCriticalNotes(jrpid, target) {
   ReadFileAsync("/data?id=" + jrpid + "&a=critical", function(responseText) {
		if (responseText.match(/^\s*$/)) {
			return;
		}
	   var element = document.getElementById(target);
		if (!element) {
			return;
		}

		element.innerHTML = responseText;

		var i;
		var content;

		var h4s = element.querySelectorAll("h2");
		for (i=0; i<h4s.length; i++) {
			content = h4s[i].innerHTML;
		 	h4s[i].outerHTML = '<h4>' + content + '</h4>';
		}

		var h3s = element.querySelectorAll("h1");
		for (i=0; i<h3s.length; i++) {
			content = h3s[i].innerHTML;
		 	h3s[i].outerHTML = '<h3 class="brown-border">' + content + '</h3>';
		}

	});
}



//////////////////////////////
//
// GetRimeTitle --
//

function GetRimeTitle(rimenum, rimelist) {
	var entry = GetRimeVerseEntry(rimenum, rimelist);
	if (entry) {
		return entry.TITLE;
	} else {
		return "";
	}
}



//////////////////////////////
//
// GetAllSettingEntry -- 
//

function GetAllSettingEntry(catalognum, worklist) {
   if (!worklist) {
		worklist = ALLSETTINGLIST;
   }
   if (!worklist) {
		return "";
	}
	if (!catalognum) {
		console.log("ERROR: catalognum undefined: ", catalognum);
		return "";
	}
	if (catalognum.length == 0) {
		console.log("ERROR: catalognum empty: ", catalognum);
		return "";
	}
	var list = worklist;
	if (!list.length) {
		list = worklist.RIME;
	}
   for (var i=0; i<list.length; i++) {
		if (list[i].CATALOGNUM.match(catalognum)) {
			return list[i];
		}
	}
}

//////////////////////////////
//
// GetAllSettingEntryList -- 
//

function GetAllSettingEntryList(catalognum, worklist) {
   if (!worklist) {
		worklist = ALLSETTINGLIST;
   }
   if (!worklist) {
		return "";
	}
	if (!catalognum) {
		console.log("ERROR: catalognum undefined: ", catalognum);
		return "";
	}
	if (catalognum.length == 0) {
		console.log("ERROR: catalognum empty: ", catalognum);
		return "";
	}
	var list = worklist;
	if (!list.length) {
		list = worklist.RIME;
	}
	var output = [];
   for (var i=0; i<list.length; i++) {
		if (list[i].CATALOGNUM.match(catalognum)) {
			output.push(list[i]);
		}
	}
	return output;
}



//////////////////////////////
//
// GetRimeVerseEntry -- 
//


function GetVerseEntry(id, list) {
	return GetRimeVerseEntry(id, list);
}

function GetRimeVerseEntry(id, list) {
	if (id.match(/^\d+$/)) {
		// convert rime # to catalog number
		var newid = "Trm";
		if (id < 1000) { newid += "0"; }
		if (id < 100)  { newid += "0"; }
		if (id < 10)   { newid += "0"; }
		id = newid + id;
	}
   if (!list) {
		list = ALLVERSELIST;
   }
   if (!list) {
		return "";
	}
	if (!id) {
		return "";
	}
	if (!list.length) {
		list = list.RIME;
	}
   for (var i=0; i<list.length; i++) {
		if (id === list[i].CATALOGNUM) {
			return list[i];
		}
	}
	return null;
}



//////////////////////////////
//
// GetRimeSettingEntry --
//

function GetRimeSettingEntry(rimenum, rimelist) {
   if (!rimelist) {
		rimelist = RIMESETTINGLIST;
   }
   if (!rimelist) {
		return "";
	}
	if (!rimenum) {
		return "";
	}
	var list = rimelist;
	if (!list.length) {
		list = rimelist.RIME;
	}
   for (var i=0; i<list.length; i++) {
		if (rimenum == list[i].SOLERTI) {
			return list[i];
		}
	}
}



//////////////////////////////
//
// GetFlatVerseList --
//

function GetFlatVerseList() {
	var settings = TASSODATA.VERSES;
	var output = [];
	for (var property in settings) {
		if (settings[property].VERSEDATA && Array.isArray(settings[property].VERSEDATA)) {
			output = output.concat(settings[property].VERSEDATA);
		}
	}
	return output;
}



//////////////////////////////
//
// GetFlatSettingList --
//

function GetFlatSettingList() {
	var settings = TASSODATA.SETTINGS;
	var output = [];
	for (var property in settings) {
		if (settings[property].SETTING && Array.isArray(settings[property].SETTING)) {
			output = output.concat(settings[property].SETTING);
		}
	}
	return output;
}



//////////////////////////////
//
// GetSettingEntry --
//

function GetSettingEntry(id) {

	var settings = TASSODATA.SETTINGS;
	var reps = [];
	for (var property in settings) {
		if (settings[property].SETTING && Array.isArray(settings[property].SETTING)) {
			reps.push(settings[property].SETTING);
		}
	}

	for (var i=0; i<reps.length; i++) {
		for (var j=0; j<reps[i].length; j++) {
         if (id === reps[i][j].CATALOGNUM) {
				return reps[i][j];
			}
		}
	}
	return null;
}



//////////////////////////////
//
// GetWorkEntry --
//

function GetWorkEntry(id, worklist) {
   if (!worklist) {
		worklist = WORKLIST;
   }
   if (!worklist) {
		return null;
	}
	if (!id) {
		return null;
	}
	var list = worklist[0].works;
   for (var i=0; i<list.length; i++) {
		if (id == list[i].id) {
			return list[i];
		}
	}
}



//////////////////////////////
//
// HighlightNavigationBar --
//

function HighlightNavigationBar(target) {
	if (!target) {
		target = "#header";
	}
	var element = document.querySelector(target);
	if (!element) {
		return;
	}
	var list = element.querySelectorAll("li a");
	var pname = window.location.pathname.replace(/index.html/, "");
	if (pname.length > 1) {
		pname = pname.replace(/\/$/, "");
	}
	var text;
	var newtext;
	var newnode;
	for (var i=0; i<list.length; i++) {
      var link = list[i].href.replace(/^https?:\/\/[^\/]+/, "");
		if (pname == link) {
			text = list[i].innerHTML;
			newnode = document.createElement("span");
			newnode.innerHTML = text;
			newnode.className = "self-link";
			list[i].parentNode.innerHTML = newnode.outerHTML;
			break;
		}
	}
}



//////////////////////////////
//
// CheckLocalStorage -- Automatically flush the local/session storage
//    after 24 hours (at least during development mode).
//

function CheckLocalStorage() {
	var hours = 24;
	var seconds = new Date().getTime() / 1000;

/*
	var timestamp = sessionStorage.timestamp;
	if (!timestamp) {
		sessionStorage.timestamp = seconds;
	} else {
		if (seconds - timestamp > hours * 3600)  {
			sessionStorage.clear();
		}
	}
*/

	var timestamp = localStorage.timestamp;
	if (!timestamp) {
		localStorage.timestamp = seconds;
	} else {
		var hours = 24;
		var seconds = new Date().getTime() / 1000;
		if (seconds - timestamp > hours * 3600)  {
			localStorage.clear();
		}
	}
}



//////////////////////////////
//
// GetRomanNumeral --
//

function GetRomanNumeral(arabic) {
	if (arabic < 1) {
		return arabic;
	}
	var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romans  = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

	var output = "";
	for (var i=0; i<numbers.length; i++) {
		while (arabic >= numbers[i]) {
			output += romans[i];
			arabic -= numbers[i];
		}
	}
	return output;
}



//////////////////////////////
//
// getRomanNumeral --
//

function getRomanNumeralUpper(input) {
	input = parseInt(input);
	switch (input) {
		case 1: return "I";
		case 2: return "II";
		case 3: return "III";
		case 4: return "IV";
		case 5: return "V";
		case 6: return "VI";
		case 7: return "VII";
		case 8: return "VIII";
		case 9: return "IX";
		case 10: return "X";
		case 11: return "XI";
		case 12: return "XII";
		case 13: return "XIII";
		case 14: return "XIV";
		case 15: return "XV";
		case 16: return "XVI";
		case 17: return "XVII";
		case 18: return "XVIII";
		case 19: return "XIX";
		case 20: return "XX";
		case 21: return "XXI";
		case 22: return "XXII";
		case 23: return "XXIII";
		case 24: return "XXIV";
		case 25: return "XXV";
		case 26: return "XXVI";
		case 27: return "XXVII";
		case 28: return "XXVIII";
		case 29: return "XXIX";
		case 30: return "XXX";
	}
	return input;
}



//////////////////////////////
//
// GetTitleName --
//

function GetTitleName(id) {
	var canto;
	var echo;
	var echoroman;
	var cantoroman;
	var ottava;
	var verse;
	var matches;
	if (matches = id.match(/Trm0*(\d+)/)) {
		return "<i>Rime</i> " + matches[1];
	} else if (matches = id.match(/Tsg(\d\d)0*(\d+)/)) {
		canto = matches[1];
		cantoroman = GetRomanNumeral(canto);
		ottava = matches[2];
		return "<i>Gerusalemme</i> " + cantoroman + "/" + ottava;
	} else if (matches = id.match(/Tam(\d)(\d\d)(\d\d\d\d)/)) {
		act = matches[1];
		actroman = GetRomanNumeral(act);
		scene = matches[2].replace(/^0/, "");
		verse = matches[3].replace(/^0/, "");
		return "<i>Aminta</i> " + actroman + "/" + scene + "/" + verse;
	} else if (matches = id.match(/Tec(\d)(\d\d\d)/)) {
		echo = matches[1];
		echoroman = GetRomanNumeral(echo);
		verse = matches[2].replace(/^0/, "");
		return "<i>Ecloghe</i> " + echoroman + "/" + verse;
	} else if (matches = id.match(/Tri(\d)(\d\d\d)/)) {
		echo = matches[1];
		echoroman = GetRomanNumeral(echo);
		verse = matches[2].replace(/^0/, "");
		return "<i>Rinaldo</i> " + echoroman + "/" + verse;
	} else if (matches = id.match(/Tbv(\d\d\d\d)/)) {
		stanza = matches[1].replace(/^0/, "");
		return "<i>Lagrime</i> " + stanza;
	} else if (matches = id.match(/Tco(\d\d)(\d\d)/)) {
		echo = matches[1];
		echoroman = GetRomanNumeral(echo);
		verse = matches[2].replace(/^0/, "");
		return "<i>G. conquistata</i> " + echoroman + "/" + verse;
	} else if (matches = id.match(/Trt(\d\d)(\d\d)/)) {
		act = matches[1].replace(/^0/, "");
		actroman = GetRomanNumeral(act);
		scene = matches[2].replace(/^0/, "");
		verse = "Coro";
		return "<i>Aminta</i> " + actroman + "/" + scene + "/" + verse;
	} else {
		return id;
	}
}



//////////////////////////////
//
// ExternalLinksToNewTab -- Make all external links on a page be displayed
//    in a new tab/window.
//

function ExternalLinksToNewTab() {
	var links = document.querySelectorAll("a");
	var i;
	for (i=0; i<links.length; i++) {
		var text = links[i].getAttribute("href");
		if (text.match("//")) {
			links[i].target = "_blank";
		}
	}
}


///////////////////////////////////////////////////////////////////////////
//
// TASSODATA PROCESSING FUNCTIONS
// 

//////////////////////////////
//
// LoadTassoData --
//

function LoadTassoData(fn) {
	if (sessionStorage["TASSODATA"]) {
		console.log("Loaded Tasso database from session storage");
		TASSODATA = JSON.parse(sessionStorage.TASSODATA);
		if (fn) {
			fn();
		}
	} else {
		var request = new XMLHttpRequest();
		request.open("GET", "/data/indexes/tasso-data.aton");
		request.send();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log("Loaded Tasso database from server");
				var aton = new ATON;
				TASSODATA = aton.parse(this.responseText).TASSODATA;
				sessionStorage.TASSODATA = JSON.stringify(TASSODATA);
				fn();
			}
		}
	}
}



//////////////////////////////
//
// PrepareGlobalTassoObjects -- This function creates contents for global variables
//    which are derived from TASSODATA structure;
// var RIMESETTINGLIST;    // list of poems without verse contents
//                         // from TASSODATA->SETTINGS->RIME_SETTINGS
// var GERUSETTINGLIST;    // list of poems without verse contents
//                         // from TASSODATA->SETTINGS->GERUSALEMME_SETTINGS
// var AMINTASETTINGLIST;  // list of Aminta settings
//                         // from TASSODATA->SETTINGS->AMINTA_SETTINGS
// var OTHERSETTINGLIST;   // list of other settings
//                         // from TASSODATA->SETTINGS->OTHER_SETTINGS
// var ALLSETTINGLIST;     // collapse of all settings in
//                         // TASSODATA->SETTINGS object
//

function PrepareGlobalTassoObjects() {
	if (!TASSODATA) {
		console.log("TASSODATA is not defined");
		return;
	}
	if (!RIMESETTINGLIST) {
		RIMESETTINGLIST = TASSODATA.SETTINGS.RIME_SETTINGS.SETTING;
	}
	if (!GERUSETTINGLIST) {
		GERUSETTINGLIST = TASSODATA.SETTINGS.GERUSALEMME_SETTINGS.SETTING;
	}
	if (!AMINTASETTINGLIST) {
		AMINTASETTINGLIST = TASSODATA.SETTINGS.AMINTA_SETTINGS.SETTING;
	}
	if (!OTHERSETTINGLIST) {
		OTHERSETTINGLIST = TASSODATA.SETTINGS.OTHER_SETTINGS.SETTING;
	}
	if (!ALLSETTINGLIST) {
		ALLSETTINGLIST = RIMESETTINGLIST.concat(AMINTASETTINGLIST,
				GERUSETTINGLIST, OTHERSETTINGLIST);
	}
	if (!RSETTINGS) {
		RSETTINGS = GetRsettings(ALLSETTINGLIST);
	}
	if (!ECLOGHESETTINGLIST) {
		ECLOGHESETTINGLIST = [];
		RINALDOSETTINGLIST = [];
		LAGRIMESETTINGLIST = [];
		TORRISMONDOSETTINGLIST = [];
		CONQUISTATASETTINGLIST = [];
		for (var i=0; i<OTHERSETTINGLIST.length; i++) {
			var s = OTHERSETTINGLIST[i];
			if (s.CATALOGNUM.match(/^Tec/)) {
				ECLOGHESETTINGLIST.push(s);
			} else if (s.CATALOGNUM.match(/^Tri/)) {
				RINALDOSETTINGLIST.push(s);
			} else if (s.CATALOGNUM.match(/^Tbv/)) {
				LAGRIMESETTINGLIST.push(s);
			} else if (s.CATALOGNUM.match(/^Trt/)) {
				TORRISMONDOSETTINGLIST.push(s);
			} else if (s.CATALOGNUM.match(/^Tco/)) {
				CONQUISTATASETTINGLIST.push(s);
			} else {
				console.log("Unknown genre for ", s.CATALOGNUM);
			}
		}
	}

	if (!SOURCES) {
		SOURCES = TASSODATA.SOURCES.SOURCE;
	}
	if (!SCORES) {
		SCORES = TASSODATA.SCORES.SCOREDATA;
	}

	if (!RIMEVERSELIST) {
		RIMEVERSELIST = TASSODATA.VERSES.RIME_VERSES.VERSEDATA;
	}
	if (!AMINTAVERSELIST) {
		AMINTAVERSELIST = TASSODATA.VERSES.AMINTA_VERSES.VERSEDATA;
	}
	if (!GERUVERSELIST) {
		GERUVERSELIST = TASSODATA.VERSES.GERUSALEMME_VERSES.VERSEDATA;
	}
	if (!OTHERVERSELIST) {
		OTHERVERSELIST = TASSODATA.VERSES.OTHER_VERSES.VERSEDATA;
		LAGRIMEVERSELIST = [];
		CONQUISTATAVERSELIST = [];
		RINALDOVERSELIST = [];
		TORRISMONDOVERSELIST = [];
		ECLOGHEVERSELIST = [];
		for (var m=0; m<OTHERVERSELIST.length; m++) {
			var mentry = OTHERVERSELIST[m];
			var myid = mentry.CATALOGNUM;
			if (myid.match(/Tec/)) {
				ECLOGHEVERSELIST.push(mentry);
			} else if (myid.match(/Tri/)) {
				RINALDOVERSELIST.push(mentry);
			} else if (myid.match(/Tbv/)) {
				LAGRIMEVERSELIST.push(mentry);
			} else if (myid.match(/Tco/)) {
				CONQUISTATAVERSELIST.push(mentry);
			} else if (myid.match(/Trt/)) {
				TORRISMONDOVERSELIST.push(mentry);
			}
		}
		TASSODATA.VERSES.LAGRIME_VERSES = {VERSEDATA: LAGRIMEVERSELIST};
		TASSODATA.VERSES.TORRISMONDO_VERSES = {VERSEDATA: TORRISMONDOVERSELIST};
		TASSODATA.VERSES.CONQUISTATA_VERSES = {VERSEDATA: CONQUISTATAVERSELIST};
		TASSODATA.VERSES.ECLOGHE_VERSES = {VERSEDATA: ECLOGHEVERSELIST};
		TASSODATA.VERSES.RINALDO_VERSES = {VERSEDATA: RINALDOVERSELIST};
	}
	if (!ALLVERSELIST) {
		ALLVERSELIST = RIMEVERSELIST.concat(AMINTAVERSELIST);
		ALLVERSELIST = ALLVERSELIST.concat(GERUVERSELIST);
		ALLVERSELIST = ALLVERSELIST.concat(OTHERVERSELIST);
	}
	for (var i=1; i<ALLVERSELIST.length-1; i++) {
		ALLVERSELIST[i].PREVIOUS_VERSE = ALLVERSELIST[i-1];
		ALLVERSELIST[i].NEXT_VERSE = ALLVERSELIST[i+1];
	}
	ALLVERSELIST[0].PREVIOUS_VERSE = ALLVERSELIST[ALLVERSELIST.length-1];
	ALLVERSELIST[0].NEXT_VERSE = ALLVERSELIST[1];
	ALLVERSELIST[ALLVERSELIST.length-1].NEXT_VERSE = ALLVERSELIST[0];
	ALLVERSELIST[ALLVERSELIST.length-1].PREVIOUS_VERSE = ALLVERSELIST[ALLVERSELIST.length-2];

	if (!LITMANU) {
		LITMANU = TASSODATA.MANUSCRIPTS.MANUSCRIPT;
	}
	if (!LITPRINT) {
		LITPRINT = TASSODATA.PRINTS.PRINT;
	}

	InsertVersesIntoSettings();
	InsertScoresIntoSettings();
	InsertSourcesIntoSettings();
	InsertComposersIntoSettings();
	InsertManuscriptLocationsIntoVerseList();
	InsertPrintLocationsIntoVerseList();
}


//////////////////////////////
//
// GetRsettings -- Return a list of settings indexed by catalog number.
//

function GetRsettings(data) {
	var output = {};
	for (var i=0; i<data.length; i++) {
		var catalognum = data[i].CATALOGNUM;
		output[catalognum] = data[i];
	}
	return output;
}



//////////////////////////////
//
// InsertManuscriptLocationsIntoVerseList --
//

function InsertManuscriptLocationsIntoVerseList() {
	var verselist = ALLVERSELIST;
	var manloc = LITMANU;
	var rmanu = {};
	var i;
	var j;
	var list;
	var manlocation;
	for (i=0; i<manloc.length; i++) {
		var key = manloc[i].SMSIGLUM;
		if (key.match(/^\s*$/)) {
			continue;
		}
		rmanu[key] = manloc[i];
	}
	for (i=0; i<verselist.length; i++) {
		if (verselist[i].MANUSCRIPTS) {
			continue;
		}
		verselist[i].MANUSCRIPTS = {};
		if (!verselist[i].MANUSRC) {
			continue;
		}
		list = verselist[i].MANUSRC.split(/\s*,\s/);
		if (!list) {
			continue;
		}
		manlocation = "";
		for (j=0; j<list.length; j++) {
			var item = rmanu[list[j]];
			if (item) {
				verselist[i].MANUSCRIPTS[list[j]] = item;
				manlocation += " " + item.LOCATION;
			} else {
				// console.log("CANNOT FIND MANSUCRIPT INFO FOR", list[j]);
			}
		}
		verselist[i].MANLOCATION = manlocation;
	}
}



//////////////////////////////
//
// InsertPrintLocationsIntoVerseList --
//

function InsertPrintLocationsIntoVerseList() {
	var verselist = ALLVERSELIST;
	var printloc = LITPRINT;
	var rprint = {};
	var i;
	var j;
	var list;
	var printlocation;
	for (i=0; i<printloc.length; i++) {
		var key = printloc[i].SPRINTNUM;
		if (key.match(/^\s*$/)) {
			continue;
		}
		rprint[key] = printloc[i];
	}
	for (i=0; i<verselist.length; i++) {
		if (verselist[i].PRINTS) {
			continue;
		}
		verselist[i].PRINTS = {};
		if (!verselist[i].PRINTSRC) {
			continue;
		}
		list = verselist[i].PRINTSRC.split(/\s*,\s/);
		if (!list) {
			continue;
		}
		printlocation = "";
		litpub = "";
		for (j=0; j<list.length; j++) {
			var item = rprint[list[j]];
			if (item) {
				verselist[i].PRINTS[list[j]] = item;
				printlocation += " " + item.PUBLOCATION;
				litpub += " " + item.PUBLISHER;
			} else {
				// console.log("CANNOT FIND PRINT INFO FOR", list[j]);
			}
		}
		verselist[i].PRINTLOCATION = printlocation;
		verselist[i].LITPUB = litpub;
	}
}


//////////////////////////////
//
// InsertVersesIntoSettings --
//

function InsertVersesIntoSettings() {

	// inserting RIMEVERSELIST entries into RIMESETTINGLIST:
	var RVERSE = {};
	var i;
	var vid;
	for (i=0; i<RIMEVERSELIST.length; i++) {
		vid = RIMEVERSELIST[i].CATALOGNUM;
		RVERSE[vid] = RIMEVERSELIST[i];
	}
	for (i=0; i<RIMESETTINGLIST.length; i++) {
		var id = RIMESETTINGLIST[i].CATALOGNUM;
		var matches;
		if (!(matches = id.match(/(^[A-Z][a-z][a-z]\d+)[a-z]+/))) {
			continue;
		}
		vid = matches[1];
		RIMESETTINGLIST[i].VERSEDATA = RVERSE[vid];
	}

}



//////////////////////////////
//
// InsertScoresIntoSettings --
//

function InsertScoresIntoSettings() {

	// inserting SCORES entries into RIMESETTINGLIST:
	var RSCORES = {};
	var i;
	var id;
	for (i=0; i<SCORES.length; i++) {
		id = SCORES[i].CATALOGNUM;
		RSCORES[id] = SCORES[i];
	}
	for (i=0; i<ALLSETTINGLIST.length; i++) {
		var id = ALLSETTINGLIST[i].CATALOGNUM;
		ALLSETTINGLIST[i].SCOREDATA = RSCORES[id];
	}

}



//////////////////////////////
//
// InsertSourcesIntoSettings --
//

function InsertSourcesIntoSettings() {
	var list = GetFlatSettingList();

	// inserting SOURCES entries into list:
	var RSOURCES = {};
	var i;
	var id;
	for (i=0; i<SOURCES.length; i++) {
		id = SOURCES[i].RISM;
		RSOURCES[id] = SOURCES[i];
	}
	for (i=0; i<list.length; i++) {
		var id = list[i].PRINCEPSRISM;
		if (!id) {
			id = list[i].RISM;
		}
		if (!id) {
			// console.log("Warning: entry has no RISM:", list[i]);
		}
		var id = list[i].PRINCEPSRISM;
		var value = RSOURCES[id];
		if (value) {
			list[i].SOURCE = value;
			list[i].MDEDICATEE = value.SRCDEDICATEESHORT;
		} else {
			// console.log("ID", id, "HAS NO SOURCE", list[i]);
		}
	}

}



//////////////////////////////
//
// InsertSourcesIntoSettings --
//

function InsertComposersIntoSettings() {
	var COMPOSERS = TASSODATA.COMPOSERS.COMPOSERDATA;
	var list = GetFlatSettingList();

	// inserting SOURCES entries into list:
	var RCOMPOSERS = {};
	var i;
	var id;
	for (i=0; i<COMPOSERS.length; i++) {
		id = COMPOSERS[i].COMPOSER;
		RCOMPOSERS[id] = COMPOSERS[i];
	}
	for (i=0; i<list.length; i++) {
		var id = list[i].COMPOSER;
		list[i].COMPOSERDATA = RCOMPOSERS[id];
	}
}



//////////////////////////////
//
// GetCatalogInfo --
//

function GetCatalogInfo(id) {
	var output = "";
	if (!id) {
		return output;
	}
	var matches;
	if (matches = id.match(/Trm0*(\d+)/)) {
		output += "&nbsp;&nbsp;(<i>Rime</i> ";
		output += matches[1];
		output += ")";
	} else if (matches = id.match(/Tsg(\d\d)(\d\d\d)/)) {
		// Tsg99888z :: 99 = canto, 888 = ottava
		var canto = GetRomanNumeral(matches[1]);
		var ottava = matches[2].replace(/^0*/, "");
		output += "&nbsp;&nbsp;(<i>Gerusalemme</i> ";
		output += canto + "/" + ottava;
		output += ")";
	} else if (matches = id.match(/Tec(\d)(\d\d\d)/)) {
		// Tec9888z :: 9 = ecloghe, 888 = verse
		var ecloghe = GetRomanNumeral(matches[1]);
		var verse = matches[2].replace(/^0*/, "");
		output += "&nbsp;&nbsp;(<i>Ecloghe</i> ";
		output += ecloghe + "/" + verse;
		output += ")";
	} else if (matches = id.match(/Tbv(\d\d\d\d)/)) {
		// Tec9999z :: 9999 = stanza
		var stanza = matches[1].replace(/^0*/, "");
		output += "&nbsp;&nbsp;(<i>Lagrime</i> ";
		output += " stanza " + stanza;
		output += ")";
	} else if (matches = id.match(/Tri(\d)(\d\d\d)/)) {
		// Tri9888z :: 9 = canto, 888 = ottava
		var canto = GetRomanNumeral(matches[1]);
		var ottava = matches[2].replace(/^0*/, "");
		output += "&nbsp;&nbsp;(<i>Rinaldo</i> ";
		output += canto + "/" + ottava;
		output += ")";
	} else if (matches = id.match(/Tam(\d)(\d\d)(\d\d\d\d)/)) {
		// Tam9887777z :: 9 = Act, 88 = scene, 7777 = verse
		var act = GetRomanNumeral(matches[1]);
		var scene = matches[2].replace(/^0*/, "");
		var verse = matches[3].replace(/^0*/, "");
		output += "&nbsp;&nbsp;(<i>Aminta</i> ";
		output += act + "/" + scene + "/" + verse;
		output += ")";
	} else if (matches = id.match(/Trt(\d\d)(\d\d)/)) {
		// Trt9988z :: 99 = Act, 88 = scene
		var act = GetRomanNumeral(matches[1].replace(/^0*/, ""));
		var scene = matches[2].replace(/^0*/, "");
		output += "&nbsp;&nbsp;(<i>Re Torrismondo</i> ";
		output += act + "/" + scene;
		output += ")";
	} else if (matches = id.match(/Tco(\d\d)(\d\d)/)) {
		// Tco0806 :: 08 = Canto (Roman), 06 = Ottava
		var canto = GetRomanNumeral(matches[1].replace(/^0*/, ""));
		var ottava = matches[2].replace(/^0*/, "");
		output += "&nbsp;&nbsp;(<i>G. conquistata</i> ";
		output += canto + "/" + ottava;
		output += ")";
	} else {
		output = "";
	}
	return output;
}


function DisplayWebsiteDate() {
	var element = document.querySelector("#last-modified");
	if (!element) {
		return;
	}
	var date = '{{ site.time | date: "%-d&nbsp;%b&nbsp;%Y" }}';
	var output = "website&nbsp;last&nbsp;updated&nbsp;&nbsp;&nbsp;";
	output += "<br>";
	output += date;
	element.innerHTML = output;
}




