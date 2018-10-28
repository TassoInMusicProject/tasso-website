
all: 
	echo "Check Makefile"

v: variorum
variorum:
	cat Trm*.aton | bin/aton2variorum


t: template
templates: template
template:
	bin/createvariorumatons


c: collation
collation:
	bin/createcollation *.aton

l: list
list:
	bin/createidlist > ../../variorum/data/variorum.json

