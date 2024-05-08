---
scripts-local: true
style-local: true
handlebars: true
aton: true
jquery: true
verovio: false
pdfkit: false
vim: ts=3
permalink: /markup/index.html
---

<div id="contents-markup-header"></div>

<div class="options">
<input id="check-linenum" onchange="toggleLinenum(event)" type=checkbox>&nbsp;<span title="alt/option-l">line numbers</span>
<input id="check-syllable" onchange="toggleSyllable(event)" type=checkbox>&nbsp;<span title="alt/option-s">syllables</span>
<input id="check-stress" onchange="toggleStress(event)" type=checkbox>&nbsp;<span title="alt/option-t">lingustic&nbsp;stress</span>
<input id="check-metric-stress" onchange="toggleMetricStress(event)" type=checkbox>&nbsp;<span title="alt/option-m">metric&nbsp;stress</span>
<input id="check-rhyme" onchange="toggleRhyme(event)" type=checkbox>&nbsp;<span title="alt/option-r">rhyme scheme</span>
<input id="check-enjambment" onchange="toggleEnjambment(event)" type=checkbox>&nbsp;<span title="alt/option-j">enjambments</span>
</div>
<!--
<input onchange="toggleSyllableCount(event)", type=checkbox>&nbsp;count
<input onchange="toggleElision(event)", type=checkbox>&nbsp;elision
<input onchange="toggleGrid(event)", type=checkbox>&nbsp;grid
-->

<div id="status"></div>

<div id="contents-markup"></div>

<center><textarea oninput="updateDisplay(event)" onkeydown="handleTabKeyPressInTextArea(event)" id="editor" style="display:none;"></textarea></center>

<div style='margin-bottom:200px;'></div>

<script>

function updateDisplay(event) {
		displayTextareaContents();
}

function handleTabKeyPressInTextArea(e) {

	console.warn("KEY", e.key);

	if (e.key === "Tab") {
		e.preventDefault(); // Prevent the default tab behavior
            
		var textarea = e.target;
		var start = textarea.selectionStart;
		var end = textarea.selectionEnd;
            
		// Insert a tab character at the current cursor position
		var tabCharacter = "\t";
		textarea.value = textarea.value.substring(0, start) + tabCharacter + textarea.value.substring(end);
            
		// Move the cursor to the end of the inserted tab
		textarea.selectionStart = textarea.selectionEnd = start + tabCharacter.length;
	} else if (e.key == "ArrowRight") {
		e.stopPropagation();
	} else if (e.key == "ArrowLeft") {
		e.stopPropagation();
	} else if (e.key == "ArrowUp") {
		e.stopPropagation();
	} else if (e.key == "ArrowDown") {
		e.stopPropagation();
	}
}

</script>



