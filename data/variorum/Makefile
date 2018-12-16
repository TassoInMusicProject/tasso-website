
update:  variorum collation list

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


diff:
	for i in *.aton; \
	do \
		bin/diffmark $$i > diff-input/`basename $$i .aton`.txt; \
	done


