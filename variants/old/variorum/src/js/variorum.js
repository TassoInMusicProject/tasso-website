import $ from 'jquery';
import registerTEI from './TEIditto.js';

class Variorum {
    constructor(options){
        this.files = options.files;
        this.collation = options.collation;
        this.TEIfiles = {}; 
    }

    loadTEI() { 

        // Store all ajax calls in array
        let deferreds = [];

        for (let file of this.files) {
            deferreds.push(
                $.ajax( file ).success( (data) => {this.TEIfiles[file] = data;} )                
            );
        }

        // Also add collation
        deferreds.push(
            $.ajax( this.collation ).success( (data) => {this.TEIcollation = data;})
        );

        // All done
        $.when.apply(null, deferreds).done(() => {
            this.show(this.TEIfiles[0]);
        });

        return this
    }

    show(TEI) {
        registerTEI(TEI);
        return TEI
    }
}

export default Variorum;