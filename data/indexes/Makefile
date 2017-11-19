

# worklist: The worklist needs to be updated every time a work is added.
# Type "make worklist" to download the new work list.

worklist:
	-cp -i worklist.json worklist-old.json
	wget 'http://josquin.stanford.edu/cgi-bin/tasso?a=worklist-json-dynamic' -O worklist.json
	diff worklist-old.json worklist.json
