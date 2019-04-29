---
vim: ts=3
scripts-local: true
aton: true
style-local: true
handlebars: true
permalink: /search/index.html
jquery: true
---


<form action="#">
<table>
<tr>

<td>

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
<td>
	<span class="form-group">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repertory:
		<select id="repertory">
			<option value="Trm">Rime</option>
			<option value="Tsg">Gerusalemme</option>
			<option value="Tam">Aminta</option>
			<option disabled value="Trm,Tsg,Tam">All</option>
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




