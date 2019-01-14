---
layout: simple
---

<style>

.genre {
	font-size: 18pt;
	color: #333;
}

</style>


<table style="padding-top:40px; padding-bottom:40px" width="100%">
<tr><td style="width:200px; vertical-align:top">

<select class="genre">
	<option value="rime">Rime</option>
	<option value="aminta">Aminta</option>
	<option value="gerusalemme">Gerusalemme</option>
	<option value="ecloghe">Ecloghe</option>
	<option value="rinaldo">Rinaldo</option>
	<option value="lagrime">Lagrime della Beata Vergine</option>
	<option value="torrismondo">Re Torrismondo</option>
	<option value="contuqistata">Gerusalemme conquistata</option>
</select>

<br>
<div id="work-count"></div>
</td><td style="vertical-align:top; text-align:left">
<input style="width:200px;" placeholder="Title" id="browse-title" value="" />
<input style="width:200px;" placeholder="Poem dedicatee" id="browse-dedicatee" value="" />
<br/>
<input style="width:200px;" placeholder="Literary genre" id="browse-litgen" value="" />
<input style="width:200px;" placeholder="Print source" id="browse-printsrc" value="" />
<input style="width:200px;" placeholder="Manuscript source" id="browse-manusrc" value="" />
</td>
</tr>
</table>

<div id="browse-results">

</div>

