---
vim: ts=3
scripts-local: true
style-local: true
permalink: /analysis/homorhythm/index.html
---

<h1> Homorhythm analysis </h1>

{% include_relative description.html %}


<div id="form">
	Sort by:
	<select onchange="sortList(this.value)">
		<option value="poem">Catalog #</option>
		<option value="score">Homorhythm score</option>
<!--
		<option value="score2">Homorhythm score, model 2</option>
-->
		<option value="composer">Composer</option>
		<option value="date">Publication date</option>
	</select>
</div>


{% include_relative contents.html %}



