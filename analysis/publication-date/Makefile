
.PHONY: data

all: data 

data:
	cat ../../data/indexes/rime-settings.aton | bin/makeData > data/rime.json
	cat ../../data/indexes/gerusalemme-settings.aton | bin/makeData > data/gerusalemme.json
	cat ../../data/indexes/aminta-settings.aton | bin/makeData > data/aminta.json

	cat ../../data/indexes/rime-settings.aton \
	    ../../data/indexes/gerusalemme-settings.aton \
	    ../../data/indexes/aminta-settings.aton | bin/makeData > data/all.json

databymusic:
	bin/makeData ../../../tasso-scores/Trm/kern  > data/rime.json
	bin/makeData ../../../tasso-scores/Tsg/kern  > data/gerusalemme.json
	bin/makeData ../../../tasso-scores/Tam/kern  > data/aminta.json

clean:
	rm -rf data


