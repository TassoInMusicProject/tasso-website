
.PHONY: data

all: data 

data:
	cat ../../data/indexes/rime-settings.aton | bin/makeData > data/rime2.json

databymusic:
	bin/makeData ../../../tasso-scores/Trm/kern  > data/rime.json

clean:
	rm -rf data




