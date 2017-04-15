---
scripts-local: true
style-local: true
handlebars: true
vim: ts=3
---

<article class="about first">

<h2 class="brown-heading">Census of the <span id="count"></span> online TMP works</h2>

<div id="censustable"></div>

<hr noshade style="border-color:{{site.tab_color}}; opacity:0.25; display:block; margin-top:50px; margin-bottom:50px;">

<div style="font-size:1.25em">

<p>

Click on the column headings to sort the worklist by that feature. 
Play synthetic performances of the works by clicking on the play
buttons in the last column.  Other columns contain links to various
resources for the works:

<style>

dl#features dt {
	color: {{site.hyperlink_color}};
}

dl#features dd {
	color: #888;
}

</style>


<dl id="features">

<dt> Catalog </dt>
<dd> Links to the work page for the corresponding work. </dd>

<dt> Composer </dt>
<dd> Links to a thematic index of online works by that composer. </dd>

<dt> Title </dt>
<dd> Links to the lyric tool for the given work. </dd>

<dt> Pages </dt>
<dd> Links to a PDF file for the work. </dd>

</dl>

</p>

</div>


</article>

