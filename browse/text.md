---
layout: simple
---

<style>

.genre, .select {
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
	<option value="lagrime">Lagrime</option>
	<option value="torrismondo">Re Torrismondo</option>
	<option value="conquistata">Gerusalemme c.</option>
</select>

<br>
<div id="work-count"></div>
</td><td style="vertical-align:top; text-align:left">
<input style="width:200px;" placeholder="Title" id="browse-title" value="" />
{% include_relative litgenre-select.txt %}
{% include_relative publocation-select.txt %}
{% include_relative print-select.txt %}
{% include_relative publocation-select.txt %}
{% include_relative manuscript-select.txt %}
{% include_relative dedicatee-select.txt %}

</td>
</tr>
</table>

<div id="browse-results">

</div>

