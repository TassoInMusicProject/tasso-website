

# worklist: The worklist needs to be updated every time a work is added.
# Type "make worklist" to download the new work list.


all:
	@echo Look at the contents of the Makefile to figure out what to do.


update: spreadsheets si


ss: spreadsheets
spreadsheets: composer source settings


com: composer
composers: composer
composer:
	../bin/makecomposeraton > composers.aton


sources: source
source:
	../bin/makesourceaton > sources.aton


si: scoreindex
scoreindex:
	../bin/makescoresaton ../../../tasso-scores/*/kern/*.krn > all-scores.aton


worklist:
	-cp -i worklist.json worklist-old.json
	wget 'http://josquin.stanford.edu/cgi-bin/tasso?a=worklist-json-dynamic' -O worklist.json
	diff worklist-old.json worklist.json


updatef:	updatesf
updatesf:
	../bin/updatesettingfromspreadsheet -f rime-settings.aton


update:	updates
updates: si
	../bin/updatesettingfromspreadsheet -c -E rime-settings.aton


update2:	updates2
updates2:
	../bin/updatesettingfromspreadsheet -c rime-settings.aton


xrime:
	../bin/updatesettingfromspreadsheet rime-settings.aton


settings: rime aminta gerusalemme other

rime:
	../bin/updatesettingfromspreadsheet --overwrite rime-settings.aton
aminta:
	../bin/updatesettingfromspreadsheet --overwrite aminta-settings.aton
gerusalemme:
	../bin/updatesettingfromspreadsheet --overwrite gerusalemme-settings.aton
other:
	../bin/updatesettingfromspreadsheet --overwrite other-settings.aton



