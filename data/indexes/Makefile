

# worklist: The worklist needs to be updated every time a work is added.
# Type "make worklist" to download the new work list.

worklist:
	-cp -i worklist.json worklist-old.json
	wget 'http://josquin.stanford.edu/cgi-bin/tasso?a=worklist-json-dynamic' -O worklist.json
	diff worklist-old.json worklist.json

updatef:	updatesf
updatesf:
	../bin/updatefromspreadsheet -f spreadsheet.txt rime-settings.aton

update:	updates
updates:
	../bin/updatefromspreadsheet -c -E spreadsheet.txt rime-settings.aton


update2:	updates2
updates2:
	../bin/updatefromspreadsheet -c spreadsheet.txt rime-settings.aton


xrime:
	../bin/updatefromspreadsheet spreadsheet.txt rime-settings.aton 


rime:
	../bin/updatefromspreadsheet --overwrite spreadsheet.txt rime-settings.aton 



