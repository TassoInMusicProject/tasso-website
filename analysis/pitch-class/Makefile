.PHONY: data

all: data images contents

data:
	bin/makeData

images:
	bin/makePitchscapes

c: contents
contents:
	bin/makeContents > contents.html
