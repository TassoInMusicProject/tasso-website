import $ from 'jquery';
import * as Backbone from 'backbone';
import TEIfile from './TEIfile-model.js';

class TEIfiles extends Backbone.Collection {
    constructor(...args) {
        super(...args);
        this.model = TEIfile;
    }
    initialize(models, files) {
        // Store all ajax calls in array
        let deferreds = [];

        for (let file of files) {
            let source = file.match(/[\/](\w+)\.xml/)[1];
            deferreds.push(
                $.ajax( file ).success( (data) => {this.add({"source" : source, "data":data});} )                
            );
        }

        // All done
        $.when.apply(null, deferreds).done(() => {
            this.trigger('sync');
        });
    }
}

export default TEIfiles;