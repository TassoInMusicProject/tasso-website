import $ from 'jquery';
import * as Backbone from 'backbone';
import TEImetdata_tpl from '../templates/TEImetadata-tpl.js';

class TEIfileView extends Backbone.View {
    render(){    	
    	let raw_data = $(this.model.get("data"));
    	let title = raw_data.find("titleStmt").find('title').text();
    	let metadata = {"title":title}

    	//MS metadata
        if (raw_data.find("msDesc").get(0)){
            metadata["ms"] = {};
        	metadata["ms"]["region"] = raw_data.find('region').text();
        	metadata["ms"]["settlement"] =  raw_data.find('settlement').text();
        	metadata["ms"]["repository"] =  raw_data.find('repository').text();
        	metadata["ms"]["idno"] = raw_data.find('idno').text();
        	metadata["ms"]["origDate"] = raw_data.find('origDate').text();
        }

    	//Print metadata
    	if (raw_data.find("bibl").get(0)){
            metadata["print"] = {};
    		raw_data.find("bibl").children().each(function(i, md){
	    		metadata["print"][md.tagName] = $(md).text();
	    	});
	    	// let title = raw_data.find('bibl').find('title');
	    	// let composer = raw_data.find('bibl').find('author');
	    	// let publisher = raw_data.find('bibl').find('publisher');
	    	// let pubPlace = raw_data.find('bibl').find('pubPlace');
	    	// let date = raw_data.find('bibl').find('date');
	    	// let rism = raw_data.find('bibl').find('idno');
    	}
    	
    	this.$el.html(TEImetdata_tpl(metadata));
        this.$el.append(this.model.get('html5'));
    }
}

export default TEIfileView;