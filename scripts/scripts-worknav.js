// vim: ts=3 ft=javascript

var ORDER = {};
var ID = "";


//////////////////////////////
//
// buildNextPreviousLists --
//

function buildNextPreviousLists() {
	ORDER = {};
	var ids = [];
	var i;
	for (i=0; i<WORKLIST.length; i++) {
		var works = WORKLIST[i].works;
		for (var j=0; j<works.length; j++) {
			var id = works[j].id;
			ids.push(id);
		}
	}
	ids.sort();
	
	var id;
	for (i=1; i<ids.length-1; i++) {
		id = ids[i];
		nextone = ids[i+1];
		prevone = ids[i-1];
		ORDER[id] = { "next": nextone, "previous": prevone };
	}

	ORDER[ids[0]] = {"next": ids[1], "previous": ids[ids.length-1] };
	ORDER[ids[ids.length-1]] = {"next": ids[0], "previous": ids[ids.length-2] };

}


