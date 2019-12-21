
update:  variorum collation list checkxml

v: variorum
variorum:
	cat Trm*.aton | bin/aton2variorum -r rime
	cat Tsg*.aton | bin/aton2variorum -r gerusalemme
	cat Tam*.aton | bin/aton2variorum -r aminta
	cat Tec*.aton Trt*.aton Tri*.aton | bin/aton2variorum -r other


t: template
templates: template
template:
	bin/createvariorumatons


c: collation
collation:
	bin/createcollation Trm*.aton
	bin/createcollation Tsg*.aton
	bin/createcollation Tam*.aton
	bin/createcollation Trt*.aton Tri*.aton Tec*.aton

l: list
list:
	bin/createidlist > ../../variorum/data/variorum.json


diff:
	for i in *.aton; \
	do \
		bin/diffmark $$i > diff-input/`basename $$i .aton`.txt; \
	done

undiff:
	bin/undiff


checkxml:
	for i in ../../variorum/data/*/*.xml; \
	do \
		xmllint $$i > /dev/null; \
	done 






