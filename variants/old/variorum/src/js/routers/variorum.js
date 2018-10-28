import $ from 'jquery';
import * as Backbone from 'backbone';
import TEIfiles from '../data/TEIfiles-coll.js';
import TEIfile from '../data/TEIfile-model.js';
import Collation from '../data/collation-model.js';
import TEIfiles_view from '../views/TEIfiles-view.js';
import TEIfile_view from '../views/TEIfile-view.js';
import VariantsView from '../views/variants-view.js';

class Variorum extends Backbone.Router {

    get routes() {
        return {
            '' : "show",
            'source/:source': 'show'
        }
    }

    initialize(options){
        this.files = options.files;
        this.collation = options.collation;

        this.TEIfiles_coll = new TEIfiles([], this.files);

        // Load TEI data
        this.listenTo(this.TEIfiles_coll, 'sync', () => {  
            $.ajax( this.collation ).success( (data) => {this.TEIcollation = new Collation({"data":data, "TEIfiles": this.TEIfiles_coll});}).done(()=>{

                // All loaded, proceed here
                console.log('all loaded');

                // I don't like starting the history here, but loading TEI data at startup complicates things. 
                Backbone.history.start();

            });
        }); 

    }

    show(TEI){
        // Reset containers
        $("#TEI").empty();
        $("#variant_info").empty();

        // Go:
        let model = null;
        if (!TEI) {
            model = this.TEIfiles_coll.first();
            
        } else {                
            model = this.TEIfiles_coll.where({"source":TEI})[0];
        }
        (new TEIfile_view({"model":model, el:"#TEI"})).render();

        (new TEIfiles_view({"collection" : this.TEIfiles_coll, "el" : "#select_source", "selected":model.get("source")})).render();
        this.showCollationFor(model);
    }

    showCollationFor(TEImodel) {
        (new VariantsView({"model":this.TEIcollation, "source":TEImodel, "el": "#TEI"})).render();
    }

}

export default Variorum;