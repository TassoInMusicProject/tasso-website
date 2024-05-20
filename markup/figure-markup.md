
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

<span class="nobreak"><input id="check-linenum" onchange="toggleLinenum(event)" type=checkbox>&nbsp;<span title="alt/option-l">line numbers</span></span>

<span class="label">Figures of sound:</span>

<span class="nobreak"><input id="check-syllable" onchange="toggleRM(event)" type=checkbox>&nbsp;<span title=""><i>Rime al mezzo</i></span></span>
<span class="nobreak"><input id="check-syllable" onchange="toggleIR(event)" type=checkbox>&nbsp;<span title="">Internal rhymes</span></span>
<span class="nobreak"><input id="check-syllable" onchange="toggleAL(event)" type=checkbox>&nbsp;<span title="">Alliteration</span></span>
<span class="nobreak"><input id="check-syllable" onchange="toggleAS(event)" type=checkbox>&nbsp;<span title="">Assonance</span></span>
<span class="nobreak"><input id="check-syllable" onchange="toggleCO(event)" type=checkbox>&nbsp;<span title="">Consonance</span></span>
<span class="nobreak"><input id="check-syllable" onchange="toggleAN(event)" type=checkbox>&nbsp;<span title="">Anaphora</span></span>
<span class="nobreak"><input id="check-syllable" onchange="toggleEP(event)" type=checkbox>&nbsp;<span title="">Epistrophe</span></span>
<span class="nobreak"><input id="check-syllable" onchange="toggleON(event)" type=checkbox>&nbsp;<span title="">Onomatopoeia</span></span>
<span class="label">Figures of order:</span>

<span class="nobreak"><input id="check-syllable" onchange="toggleCH(event)" type=checkbox>&nbsp;<span title="">Chiasmus</span></span>
<span class="nobreak"><input id="check-syllable" onchange="toggleEN(event)" type=checkbox>&nbsp;<span title="">Enumeration</span></span>
<span class="nobreak"><input id="check-syllable" onchange="togglePA(event)" type=checkbox>&nbsp;<span title="">Parallelism</span></span>

</div>

<div id="contents-figure"></div>

<div id="status"></div>

<div id="contents-metric"></div>

<center><textarea oninput="updateDisplay(event)" onkeydown="handleTabKeyPressInTextArea(event)" id="editor" style="display:none;"></textarea></center>

<div style='margin-bottom:200px;'></div>



