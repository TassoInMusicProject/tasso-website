---
vim: ts=3
scripts-local: true
style-local: true
permalink: /analysis/melisma/index.html
---

<h1> Melisma analysis </h1>


{% include_relative description.html %}


<div id="form">
	Sort by:
	<select onchange="sortList(this.value)">
		<option value="poem">Catalog #</option>
		<option value="score">Melisma score</option>
		<option value="composer">Composer</option>
		<option value="date">Publication date</option>
	</select>
</div>


<div id="sort">
	{% include_relative contents.html %}
</div>



