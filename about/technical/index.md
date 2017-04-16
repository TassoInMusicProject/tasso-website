---
vim: ts=3
style-local: true
scripts-local: true
permalink: /about/technical/index.html
---


Website frontend
----------------------

Files for the Tasso in Music Project (TMP) website are hosted on
github at:

<a style="margin-left:50px;" target="_blank" href="https://github.com/TassoInMusicProject/tasso-website">https://github.com/TassoInMusicProject/tasso-website</a>

The website is served through [Github pages](https://pages.github.com) and
uses [jekyll](https://jekyllrb.com) to compile the website from the source
files.


Javascript tools
---------------------

### ATON ###

[ATON](http://aton.sapp.org) is a hierarchical data format for 
storing most metadata for the TMP website, with conversions
in and out of JSON.  It allows multi-line content as well as
comments within the data.

### Handlebars ###

Jekyll uses a templating system called [liquid](https://learn.cloudcannon.com/jekyll/introduction-to-liquid) to create static
content for the website.  Dynamic content is created using
[Handlebars](http://handlebarsjs.com) templates.  For example the
list of works on the page
[www.tassomusic.org/census](http://www.tassomusic.org/census)
are created from the
[JSON work index](https://github.com/TassoInMusicProject/tasso-website/blob/gh-pages/data/indexes/worklist.json)
using Handlebars to generate HTML content within a user's web browser.


### Variorum ###

[Variorum](https://github.com/raffazizzi/variorum) is a web interface
for displaying textual variants, developed by Raffaele Viglianti at
the [Maryland Institute for Technology in the Humanities](http://mith.umd.edu/).


### Verovio ###

[Verovio](http://www.verovio.org) is an SVG music notation renderer developed
primarily by Laurent Pugin at the [Swiss office of RISM](http://rism-ch.org/?locale=en).



Digital scores
---------------------

The repository of digital scores used on the TMP website:

<a style="margin-left:50px;" target="_blank" href="https://github.com/TassoInMusicProject/tasso-scores">https://github.com/TassoInMusicProject/tasso-scores</a>























