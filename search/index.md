---
vim: ts=3
scripts-local: true
style-local: true
permalink: /search/index.html
jquery: true
---


<form action="#">
<table>
<tr>

<td>

	<div class="form-group">
		<input autocomplete="off" id="pitch" type="text" class="form-control" placeholder="Enter Pitch">
	</div>

	<div class="form-group">
		<input autocomplete="off" id="interval" type="text" class="form-control" placeholder="Enter Interval">
	</div>

	<div class="form-group">
		<input autocomplete="off" id="rhythm" type="text" class="form-control" placeholder="Enter Rhythm">
	</div>

</td>
<td>
	<span class="form-group">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repertory:
		<select>
			<option>Rime</option>
			<option disabled>Gerusalemme</option>
			<option disabled>Aminta</option>
			<option disabled>All</option>
		</select>
	</span>
		</td>
	</tr>
</table>
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




