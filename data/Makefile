
worklist:
	-cp -i indexes/worklist.json indexes/worklist-old.json
	wget 'http://josquin.stanford.edu/cgi-bin/tasso?a=worklist-json-dynamic' -O indexes/worklist.json
	diff indexes/worklist-old.json indexes/worklist.json
	

clean:
	rm indexes/worklist-old.json



