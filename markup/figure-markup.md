
<style>

.label {
	color: silver;
}

.nobreak {
	white-space: nowrap;

</style>


<div id="contents-figure-header"></div>

<div id="documentation-figure">
{% include_relative figure-documentation.html %}
</div>

<div class="options">

<span class="nobreak"><input id="figure-check-linenum" checked onchange="toggleLinenum(event)" type=checkbox>&nbsp;<span title="alt/option-l">line numbers</span></span>

<span class="label">Figures of sound:</span>

<span class="figure-RM-check nobreak"><input id="check-RM" checked onchange="toggleRM(event)" type=checkbox>&nbsp;<span title=""><i>Rime al mezzo</i></span></span>
<span class="figure-IR-check nobreak"><input id="check-IR" checked onchange="toggleIR(event)" type=checkbox>&nbsp;<span title="">Internal rhymes</span></span>
<span class="figure-AL-check nobreak"><input id="check-AL" checked onchange="toggleAL(event)" type=checkbox>&nbsp;<span title="">Alliteration</span></span>
<span class="figure-AS-check nobreak"><input id="check-AS" checked onchange="toggleAS(event)" type=checkbox>&nbsp;<span title="">Assonance</span></span>
<span class="figure-CO-check nobreak"><input id="check-CO" checked onchange="toggleCO(event)" type=checkbox>&nbsp;<span title="">Consonance</span></span>
<span class="figure-AN-check nobreak"><input id="check-AN" checked onchange="toggleAN(event)" type=checkbox>&nbsp;<span title="">Anaphora</span></span>
<span class="figure-EP-check nobreak"><input id="check-EP" checked onchange="toggleEP(event)" type=checkbox>&nbsp;<span title="">Epistrophe</span></span>
<span class="figure-ON-check nobreak"><input id="check-ON" checked onchange="toggleON(event)" type=checkbox>&nbsp;<span title="">Onomatopoeia</span></span>
<span class="label">Figures of order:</span>
<span class="figure-CH-check nobreak"><input id="check-CH" checked onchange="toggleCH(event)" type=checkbox>&nbsp;<span title="">Chiasmus</span></span>
<span class="figure-EN-check nobreak"><input id="check-EN" checked onchange="toggleEN(event)" type=checkbox>&nbsp;<span title="">Enumeration</span></span>
<span class="figure-PA-check nobreak"><input id="check-PA" checked onchange="togglePA(event)" type=checkbox>&nbsp;<span title="">Parallelism</span></span>

</div>

<div id="contents-figure"></div>

<div id="status-figure"></div>

<center><textarea oninput="updateDisplayFigure(event)" onkeydown="handleTabKeyPressInTextArea(event)" id="editor-figure" style="display:none;"></textarea></center>

<div style='margin-bottom:200px;'></div>


<script>

function updateDisplayFigure(event) {
	displayFigureTextareaContents();
}

</script>

