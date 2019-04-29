---
vim: ts=3
scripts-local: true
aton: true
style-local: true
handlebars: true
permalink: /search/index.html
jquery: true
---


<style>

select {
	font-size: 1.25rem;
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


</style>

<form action="#">
<table>
<tr>

<td>
	<span class="form-group">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repertory:
		<select onchange="doSearch()" id="repertory">
			<option value="Trm">Rime</option>
			<option value="Tsg">Gerusalemme</option>
			<option value="Tam">Aminta</option>
			<option disabled value="Trm,Tsg,Tam">All</option>
		</select>
	</span>

	<div style="margin-left:70px; margin-top:30px;" id="searchButton">search</div>
</td>

<td style="padding-left: 20px;">

<div class="form-group">
	<input autocomplete="off" id="pitch" type="text" class="form-control" placeholder="Enter pitch">
</div>

<div class="form-group">
	<input autocomplete="off" id="interval" type="text" class="form-control" placeholder="Enter interval">
</div>

<div class="form-group">
	<input autocomplete="off" id="rhythm" type="text" class="form-control" placeholder="Enter rhythm">
</div>

</td>

</tr>
</table>
</form>

<div style="margin-top:50px"></div>

<div id="summary"></div>

<div style="margin-top:20px"></div>
<div id="results"></div>




