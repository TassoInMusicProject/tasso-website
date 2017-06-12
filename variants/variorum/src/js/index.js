import $ from 'jquery';
import Variorum from './routers/variorum.js';
import Backbone from 'backbone';

class Application {

    constructor () {
        let baseDir = 'data/';
	    new Variorum(
	    	{"files" : [baseDir+'E2.xml', baseDir+'Solerti71.xml', baseDir+'Trm0319a.xml'],
	    	"collation" : baseDir+'collation.xml'}
	    );
        
    }

}

$(() => {
    new Application();
});
