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
comments within the data.  Most of the 
[metadata for the website](https://github.com/TassoInMusicProject/tasso-website/tree/gh-pages/data/indexes)
is stored in this format.

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


### Vega-Lite ###

[Vega-Lite](https://vega.github.io/vega-lite/) is a javascript data plotting
library that is used on some analysis pages such as for the histograms plots
display on the [pitch-class](/analysis/pitch-class) analysis page and the
[publication date](/analysis/publication-date) analysis page.


### Verovio ###

[Verovio](http://www.verovio.org) is an SVG music notation renderer
developed primarily by Laurent Pugin at the [Swiss office of
RISM](http://rism-ch.org/?locale=en).  The [humlib](https://humlib.humdrum.org)
library is embedded within verovio and is used to process and analyze the
Humdrum scores for the website as well as convert the scores into the 
[MEI](https://www.music-encoding.org) format for rendering in verovio.



Digital scores
---------------------

The repository of digital scores used on the TMP website:

<a style="margin-left:50px;" target="_blank" href="https://github.com/TassoInMusicProject/tasso-scores">https://github.com/TassoInMusicProject/tasso-scores</a>


Metadata
---------------------

Metadata index used on the website:


<div style="margin-left:50px" id="tassodata"></div>
<script>
	{% include_relative renderjson.js %}
</script>
<script>
	function displayTassoData() {
		document.getElementById("tassodata").appendChild(renderjson(TASSODATA));
	}
</script>

This data is used to search on the <a target="_new" href="/browse">Browse page</a>, as well as display most information about scores such as on the 
<a target="_new" href="/work?id=Trm0047m">Work pages</a>.  The JSON data is
constructed from the ATON data files found in  the
[website source code](https://github.com/TassoInMusicProject/tasso-website/tree/gh-pages/data/indexes) on github.


