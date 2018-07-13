
all: worklist

worklist:
	# Download a new version of the worklist according to the
	# Humdrum scores present on the server.
	-cp -i indexes/worklist.json indexes/worklist-old.json
	wget 'http://josquin.stanford.edu/cgi-bin/tasso?a=worklist-json-dynamic' -O indexes/worklist.json
	diff indexes/worklist-old.json indexes/worklist.json
	

humdrum: humdrum-rime humdrum-aminta

rime: humdrum-rime
humdrum-rime:
	# Insert bibliographic information from files in indexes/*-settings.aton
	# into Humdrum scores.  This will overwrite any reference records
	# in the Humdrum files unless the equivalent field in the index file
	# is empty.
	bin/index2humdrum -f indexes/rime-settings.aton \
		../../tasso-scores/Trm/kern/*.krn

aminta: humdrum-aminta
humdrum-aminta:
	bin/index2humdrum -f indexes/aminta-settings.aton \
		../../tasso-scores/Tam/kern/*.krn


clean:
	rm indexes/worklist-old.json



