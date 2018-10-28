import * as Backbone from 'backbone';
import getHTML5 from '../utils/TEIditto.js';

class TEIfile extends Backbone.Model {
	initialize() {
		this.set("html5", getHTML5(this.get("data")));
	}
}

export default TEIfile;