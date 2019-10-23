
.PHONY: data

all: data 

data:
	cat ../../data/indexes/rime-settings.aton \
	    ../../data/indexes/gerusalemme-settings.aton \
	    ../../data/indexes/aminta-settings.aton | bin/makeData > all.json

clean:
	rm -rf all.json


