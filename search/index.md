---
vim: ts=3
scripts-local: true
style-local: true
permalink: /search/index.html
jquery: true
---


<form action="#">
	<span class="form-group">
		<input id="pitch" type="text" class="form-control" placeholder="Enter Pitch">
	</span>
	<span class="form-group">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repertory:
		<select>
			<option>Rime</option>
			<option disabled>Gerusalemme</option>
			<option disabled>Aminta</option>
			<option disabled>All</option>
		</select>
	</span>
</form>

<div style="margin-top:50px"></div>

<div id="summary"></div>

<div style="margin-top:20px"></div>
<div id="results"></div>

<style>

th {
	font-style: italic;
	text-align: left;
}

td {
	vertical-align: top;
}

td:nth-child(2) {
	vertical-align: top;
	padding-right:20px;
}

</style>




