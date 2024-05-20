---
vim: ts=3
scripts-local: true
style-local: true
handlebars: true
aton: true
jquery: true
layout: markup
vim: ft=html
permalink: /markup/index.html
---


<div style="margin-top:50px;"></div>

<div id="contents">
	<div id="metric-markup">
		{% include_relative metric-markup.md %}
	</div>

	<div id="figure-markup" class="hidden">
		{% include_relative figure-markup.md %}
	</div>
</div>



