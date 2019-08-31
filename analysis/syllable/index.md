---
vim: ts=3
scripts-local: true
style-local: true
permalink: /analysis/syllable/index.html
---

<h1> Duration-to-syllable ratios </h1>

{% include_relative description.html %}

<style>
div#form {
	margin-bottom: 25px;
}
table th {
	margin-left: 15px;
	text-align: left;
}
table tbody tr td:first-child {
	text-align: right;
}
table td {
	vertical-align: top;
	padding-right: 15px;
	margin-right: 15px;
}

</style>


<div id="form">
	Sort by:
	<select onchange="sortList(this.value)">
		<option value="poem">Poem</option>
		<option value="ratio">Ratio</option>
		<option value="duration">Music duration</option>
		<option value="syllable">Syllable count</option>
		<option value="composer">Composer</option>
		<option value="date">Publication date</option>
		<option value="timesig">Time signature</option>
	</select>
</div>

{% include_relative contents.html %}
