---
layout: simple
---

<style>

.select {
	font-size: 18pt;
	color: #333;
}

</style>


<table style="padding-top:40px; padding-bottom:40px" width="100%">
<tr><td style="width:200px; vertical-align:top">

<select class="genre select">
	<option value="all">all genres</option>
	<option value="rime">Rime</option>
	<option value="gerusalemme">Gerusalemme</option>
	<option value="aminta">Aminta</option>
	<option value="ecloghe">Ecloghe</option>
	<option value="rinaldo">Rinaldo</option>
	<option value="lagrime">Lagrime</option>
	<option value="torrismondo">Re Torrismondo</option>
	<option value="conquistata">Gerusalemme c.</option>
</select>

<br>
<div id="work-count"></div>
</td><td style="vertical-align:top">
<input style="width:200px;" placeholder="Title" id="browse-title" value="" />
{% include_relative composer-select.txt %}
<input style="width:200px;" placeholder="Year" id="browse-year" value="" />
{% include_relative location-select.txt %}
{% include_relative publisher-select.txt %}
<!--
<input style="width:200px;" placeholder="Orig. voices" id="browse-ovoices" value="" />
<input style="width:200px;" placeholder="Extant voices" id="browse-evoices" value="" />
-->
{% include_relative voices-select.txt %}
{% include_relative mensuration-select.txt %}
{% include_relative clef-select.txt %}
{% include_relative key-select.txt %}
{% include_relative final-select.txt %}
{% include_relative mdedicatee-select.txt %}

</td>
</tr>
</table>

<div id="browse-results">

</div>

