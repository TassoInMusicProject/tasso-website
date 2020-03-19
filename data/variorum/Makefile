
update:  undiff variorum collation list checkxml diff

v: variorum
variorum: vtam vtrm vtsg vtec

vtrm:
	cat Trm*.aton | bin/aton2variorum -r rime

vtam: 
	cat Tam*.aton | bin/aton2variorum -r aminta

vtsg:
	cat Tsg*.aton | bin/aton2variorum -r gerusalemme

vtec:
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
	git status

undiff:
	bin/undiff


checkxml:
	for i in ../../variorum/data/*/*.xml; \
	do \
		xmllint $$i > /dev/null; \
	done 






