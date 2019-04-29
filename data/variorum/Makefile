
update:  variorum collation list

v: variorum
variorum:
	cat Trm*.aton | bin/aton2variorum rime
	cat Tsg*.aton | bin/aton2variorum gerusalemme
	cat Tam*.aton | bin/aton2variorum aminta


t: template
templates: template
template:
	bin/createvariorumatons


c: collation
collation:
	bin/createcollation Trm*.aton
	bin/createcollation Tsg*.aton
	bin/createcollation Tam*.aton

l: list
list:
	bin/createidlist > ../../variorum/data/variorum.json


diff:
	for i in *.aton; \
	do \
		bin/diffmark $$i > diff-input/`basename $$i .aton`.txt; \
	done


