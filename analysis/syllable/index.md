---
vim: ts=3
scripts-local: true
style-local: true
permalink: /analysis/syllable/index.html
---

<h1> Duration-to-syllable ratios </h1>


{% include_relative description.html %}


<div id="form">
	Sort by:
	<select onchange="sortList(this.value)">
		<option value="poem">Catalog #</option>
		<option value="ratio">Ratio</option>
		<option value="duration">Music duration</option>
		<option value="syllable">Syllable count</option>
		<option value="composer">Composer</option>
		<option value="date">Publication date</option>
		<option value="timesig">Time signature</option>
	</select>
</div>


{% include_relative contents.html %}


