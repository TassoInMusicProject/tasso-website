.PHONY: macro


all: pmx mus macro
# After running "make all", copy the *.mus and macro file to
# the SCORE directory to convert to EPS files, then move the
# EPS files back here and convert to SVG images that are
# stored in the ../svg directory.

step1: all
step2: rename svg move clean

pmx:
	./.makepmx

macro:
	./.makemacro *.txt > macro

mus:
	./.makemus *.txt

rename:
	./.makerename [0-9]*.eps

svg:
	./.makesvg *.eps

move:
	mkdir -p ../svg
	-mv *.svg ../svg
	mkdir -p ../eps
	-mv *.eps ../eps

clean:
	rm *.mus

