---
vim: ts=3
scripts-local: true
style-local: true
permalink: /analysis/homophony/index.html
---

<h1> Homophonic analysis </h1>

{% include_relative description.html %}


<div id="form">
	Sort by:
	<select onchange="sortList(this.value)">
		<option value="poem">Catalog #</option>
		<option value="score">Homophonic score</option>
<!--
		<option value="score2">Homophonic score, model 2</option>
-->
		<option value="composer">Composer</option>
		<option value="date">Publication date</option>
	</select>
</div>


{% include_relative contents.html %}



