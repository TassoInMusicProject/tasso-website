/data/variorum/sources
Sat Jan  4 21:42:23 PST 2020
=================================

This directory contains texts for sources  (primarily print sources)
for Tasso poetry.  In other words, multiple poems are stored in
each source file.  These poems are then inserted into each specific
poem's \*.aton file in the parent directory. 

To process the *.txt source files in this directory, there is a Makefile
that can do three things:

* `make check` (default): check for change that will be done to *aton files
* `make change`: dry run to see which entries will change.
* `make write`: insert poems into *.aton files.

Parameters in the *.aton files will not be overwritten from the values in *.txt. 



The format of a source file:

* Header of double-@ entries: At the start of a source, there should be three parameters, in any order:

** `@@ID`: This is the XML ID for the source.  The ID cannot start with a number, and can only contain letters, numbers, underscore and dashes.
** `@@SMSIGLUM`: Solerti sigulm.  This is nearly identical to the `@@ID`, but spaces and angle brackets and other symbols are also allowed.
** `@@TYPE`: This should be one of the values: "manuscript", "print", or "music", depending on the source type.


Example header:

```
@@ID: G-1581MR
@@SMSIGLUM: G-1581MR
@@TYPE: Print
```

Any `@@` parameter can be redefined for the poems that follow it (so for example,
there can actually be multiple sources in each file, with `@@` parameters updated
at the start of each source.

Then comes a list of each poem, with the format like this example:


```
@CATALOGNUM:  Tsg01002
@PAGE:13v	
@PARATEXT:	
@VERSE:		
O Musa, tu, che di caduchi allori
    Non circondi la fronte in Helicona;
    Ma sù nel Cielo infrà i beati chori
    Hai di stelle immortali aurea corona;
    Tu spira al petto mio celesti ardori;
    Tu rischiara il mio canto: & tu perdona;
    S’intesso fregi al ver s’adorno in parte
    D’altri diletti, che de’ tuoi le carte.
```

The parameters:

* `@CATALOGNUM:` The Tasso in Music Project catalog number for the poem or musical setting.
* `@PAGE:` The page number(s) of the poem in the source
* `@PARATEXT:` Any parenthetical text at the start of the poem, such as a dedication or other commentary in the source.
* `@VERSE:` One or more entry of `@VERSE` for each stanza in the poem.


Other parameters can be included, and not all need to be included, except `@CATALOGNUM`, and preferrably



