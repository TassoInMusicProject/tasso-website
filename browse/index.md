---
vim: ts=3
scripts-local: true
style-local: true
handlebars: true
aton: true
layout: browse
permalink: /browse/index.html
---

<style>
/* reference: https://www.w3schools.com/css/css_tooltip.asp */

/* tooltip container */
.tooltip {
	position: relative;
	display: inline-block;
	/* border-bottom: 1px dotted black; */
}

/* Tooltip text */
.tooltip .tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	padding: 5px 0;
	border-radius: 6px;
 
	/* Position the tooltip text - see examples below! */
	position: absolute;
	z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
	visibility: visible;
}

.tooltip .tooltiptext {
	width: 220px;
/* for top positining: 
	bottom: 100%;
	left: 50%; 
*/
	top: -5px;
	right: 105%;

	margin-left: -110px; /* Use half of the width (120/2 = 60), to center the tooltip */
	padding: 5px;
}

.tooltip .tooltiptext::after {
	content: " ";
	position: absolute;
/*
	top: 100%; /* At the bottom of the tooltip */
	left: 50%;
*/
	/* not working yet */
	top: 0%;
	right: 0%;

	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: black transparent transparent transparent;
}
</style>

<div id="contents">
	<div style="height:1000px;"></div>
</div>



