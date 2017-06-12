import $ from 'jquery';
import * as Backbone from 'backbone';
import TEIfiles_tpl from '../templates/TEIfiles-tpl.js';

class TEIfilesView extends Backbone.View {
    initialize(options){
        this.selected = options.selected;
    }
    render(){
        this.collection.each((model) => {
            if (model.get("source") == this.selected){
                model.set("selected", true);
            }
            else model.set("selected", false);
        });
        this.$el.html(TEIfiles_tpl(this.collection.toJSON()));
    }
}

export default TEIfilesView;