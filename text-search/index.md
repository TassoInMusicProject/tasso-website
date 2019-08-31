---
vim: ts=3
scripts-local: true
aton: true
style-local: true
handlebars: true
permalink: /text-search/index.html
jquery: true
---


<style>

select {
	font-size: 1.25rem;
}

div#searchButton:hover,
.help:hover {
	background-color: #aa0000;
}

div#searchButton {
	background-color: #B19C5F;
	cursor: pointer;
	width:66px;
	border-radius: 1rem;
	font-family: Arial;
	color: #fafafa;
	padding: 0px 5px 0px 5px;
	text-decoration: none;
	margin-left: 1px;
	margin-right: 1px;
}

div.help {
	background-color: #B19C5F;
	cursor: pointer;
	width:16px;
	border-radius: 1rem;
	font-family: Arial;
	color: #fafafa;
	padding: 3px 5px 0px 8px;
	text-decoration: none;
	margin-left: 1px;
	margin-right: 1px;
}


</style>

<form action="#">
<table>
<tr>

<td>

<!--
	<span class="form-group">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repertory:
		<select onchange="doSearch()" id="repertory">
			<option value="Trm">Rime</option>
			<option value="Tsg">Gerusalemme</option>
			<option value="Tam">Aminta</option>
			<option disabled value="Tec">Ecloghe</option>
			<option value="Tri">Rinaldo</option>
			<option disabled value="Trt">Torrismondo</option>
			<option disabled value="Tco">G. conquistata</option>
			<option value="Trm,Tsg,Tam,Tri">All</option>
		</select>
	</span>
-->

</td>

<td style="padding-left: 20px;">

<div class="form-group">
	<input autocomplete="off" id="textquery" type="text" class="form-control" placeholder="Enter search text">
</div>

</td>

</tr>
</table>
</form>

<div style="margin-top:50px"></div>

<div id="summary"></div>

<div style="margin-top:20px"></div>
<div id="results"></div>




