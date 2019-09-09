---
vim: ts=3
scripts-local: true
style-local: true
permalink: /analysis/homophony/index.html
---

<h1> Homophonic analysis </h1>

The following table lists homophonic texture percentages found in
each work.  Identification of homophony is done with an algorithm,
so measurements are approximate.  The algorithm to identify
homophonic regions in the music works as follows:

<ul>

<li> First identify sonorities containing three or more simultaneous note
attacks.  These sonorities are assigned a score of 1.  
</li>

<li> Then assign
a score of 1/2 to any sonority sandwiched between two sonorities
with a score of 1.
</li>

<li> Then search for contiguous regions of music
with non-zero scores that exceed a total score threshold, which for
this analysis was set to 4 (at least three successive attack
sonorities with up to one low-attack sonority between them). 
</li>

</ul>

To view the homophonic textures in the musical notation, click on
the percentage for a work.  Textures are highlighted in red and
green: red indicates a high-attack region, and green indicates a
low-attack region between two high-attack regions.
Raw data for further analysis can be found on the spreadsheet:
<a target="_blank" href="http://bit.ly/tasso-homophony">http://bit.ly/tasso-homophony</a>.


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
}

</style>


<div id="form">
	Sort by:
	<select onchange="sortList(this.value)">
		<option value="poem">Poem</option>
		<option value="score">Homophonic score</option>
<!--
		<option value="score2">Homophonic score, model 2</option>
-->
		<option value="composer">Composer</option>
		<option value="date">Publication date</option>
	</select>
</div>

<table>
<thead>
<tr>
	<th>Score</th>
	<th>ID</th>
	<th>Composer</th>
	<th>Date</th>
	<th>Title</th>
<!--
	<th>Model&nbsp;2</th>
-->
</tr>
</thead>
<tbody id="sort">

<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0003b&filter=homophonic">60.9%</a>
	</td>

	<td class="id">
		Trm0003b
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1585
	</td>

	<td class="title">
			<i>Su l'ampia fronte il crespo oro lucente</i> (rime 3)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0003b&filter=homophonic2">26.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0023c&filter=homophonic">45.7%</a>
	</td>

	<td class="id">
		Trm0023c
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Io non posso gioire</i> (rime 23)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0023c&filter=homophonic2">20.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0023e&filter=homophonic">46.6%</a>
	</td>

	<td class="id">
		Trm0023e
	</td>

	<td class="composer">
		Pallavicino
	</td>

	<td class="date">
		1612
	</td>

	<td class="title">
			<i>Io non posso gioire</i> (rime 23)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0023e&filter=homophonic2">22.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0024a&filter=homophonic">50.3%</a>
	</td>

	<td class="id">
		Trm0024a
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Già non son io contento</i> (rime 24)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0024a&filter=homophonic2">17%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0025b&filter=homophonic">60.8%</a>
	</td>

	<td class="id">
		Trm0025b
	</td>

	<td class="composer">
		Pallavicino
	</td>

	<td class="date">
		1600
	</td>

	<td class="title">
			<i>Come vivrò ne le mie pene, Amore</i> (rime 25)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0025b&filter=homophonic2">33.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0028a&filter=homophonic">59.2%</a>
	</td>

	<td class="id">
		Trm0028a
	</td>

	<td class="composer">
		Zanotti
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Giacea la mia virtù vinta e smarrita</i> (rime 28)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0028a&filter=homophonic2">40.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0038a&filter=homophonic">49.4%</a>
	</td>

	<td class="id">
		Trm0038a
	</td>

	<td class="composer">
		Porta
	</td>

	<td class="date">
		1573
	</td>

	<td class="title">
			<i>Stavasi Amor quasi in regno assiso</i> (rime 38)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0038a&filter=homophonic2">15.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0047a&filter=homophonic">63.4%</a>
	</td>

	<td class="id">
		Trm0047a
	</td>

	<td class="composer">
		Pallavicino
	</td>

	<td class="date">
		1579
	</td>

	<td class="title">
			<i>Non è questa la mano</i> (rime 47)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0047a&filter=homophonic2">38.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0047l&filter=homophonic">57.5%</a>
	</td>

	<td class="id">
		Trm0047l
	</td>

	<td class="composer">
		Gastoldi
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Non è questa la mano</i> (rime 47)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0047l&filter=homophonic2">15.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0047m&filter=homophonic">46.7%</a>
	</td>

	<td class="id">
		Trm0047m
	</td>

	<td class="composer">
		Giovannelli
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Non è questa la mano</i> (rime 47)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0047m&filter=homophonic2">22.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0047n&filter=homophonic">45.2%</a>
	</td>

	<td class="id">
		Trm0047n
	</td>

	<td class="composer">
		Castro
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Non è questa la mano</i> (rime 47)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0047n&filter=homophonic2">49.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0047q&filter=homophonic">67%</a>
	</td>

	<td class="id">
		Trm0047q
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594 
	</td>

	<td class="title">
			<i>Non è questa la mano</i> (rime 47)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0047q&filter=homophonic2">33.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0047s&filter=homophonic">42.7%</a>
	</td>

	<td class="id">
		Trm0047s
	</td>

	<td class="composer">
		Montella
	</td>

	<td class="date">
		1604
	</td>

	<td class="title">
			<i>Non è questa la mano</i> (rime 47)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0047s&filter=homophonic2">27.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0048a&filter=homophonic">56.4%</a>
	</td>

	<td class="id">
		Trm0048a
	</td>

	<td class="composer">
		Meldert
	</td>

	<td class="date">
		1575
	</td>

	<td class="title">
			<i>Amor l'alma m'allaccia</i> (rime 48)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0048a&filter=homophonic2">14.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0048e&filter=homophonic">55.1%</a>
	</td>

	<td class="id">
		Trm0048e
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Amor l'alma m'allaccia</i> (rime 48)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0048e&filter=homophonic2">20.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0048f&filter=homophonic">62.8%</a>
	</td>

	<td class="id">
		Trm0048f
	</td>

	<td class="composer">
		Bonini
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Amor l'alma m'allaccia</i> (rime 48)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0048f&filter=homophonic2">27.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0052a&filter=homophonic">55.8%</a>
	</td>

	<td class="id">
		Trm0052a
	</td>

	<td class="composer">
		Zanotti
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>O nemica d'Amor, che sì ti rendi</i> (rime 52)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0052a&filter=homophonic2">47.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0059b&filter=homophonic">37.5%</a>
	</td>

	<td class="id">
		Trm0059b
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Lunge da voi, ben mio</i> (rime 59)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0059b&filter=homophonic2">24%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0059c&filter=homophonic">27.7%</a>
	</td>

	<td class="id">
		Trm0059c
	</td>

	<td class="composer">
		Pallavicino
	</td>

	<td class="date">
		1600
	</td>

	<td class="title">
			<i>Lunge da voi, ben mio</i> (rime 59)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0059c&filter=homophonic2">17.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0059e&filter=homophonic">!!!COM: Dering, Richard%</a>
	</td>

	<td class="id">
		Trm0059e
	</td>

	<td class="composer">
		Dering
	</td>

	<td class="date">
		1620
	</td>

	<td class="title">
			<i>Lunge da voi, ben mio</i> (rime 59)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0059e&filter=homophonic2">50%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0060c&filter=homophonic">45.5%</a>
	</td>

	<td class="id">
		Trm0060c
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Lunge da voi, mio core</i> (rime 60)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0060c&filter=homophonic2">22.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0088a&filter=homophonic">48.5%</a>
	</td>

	<td class="id">
		Trm0088a
	</td>

	<td class="composer">
		Meldert
	</td>

	<td class="date">
		1575
	</td>

	<td class="title">
			<i>M'apre talor madonna il suo celeste</i> (rime 88)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0088a&filter=homophonic2">11.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0089a&filter=homophonic">53.3%</a>
	</td>

	<td class="id">
		Trm0089a
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Mentre Madonna s'appoggiò pensosa</i> (rime 89)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0089a&filter=homophonic2">28.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0090b&filter=homophonic">68.8%</a>
	</td>

	<td class="id">
		Trm0090b
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Mentre nubi di sdegno</i> (rime 90)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0090b&filter=homophonic2">35.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0090c&filter=homophonic">37.4%</a>
	</td>

	<td class="id">
		Trm0090c
	</td>

	<td class="composer">
		Cancineo
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Mentre nubi di sdegno</i> (rime 90)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0090c&filter=homophonic2">9.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0093a&filter=homophonic">33.2%</a>
	</td>

	<td class="id">
		Trm0093a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1584
	</td>

	<td class="title">
			<i>Disdegno e gelosia</i> (rime 93)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0093a&filter=homophonic2">16.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0096a&filter=homophonic">57.6%</a>
	</td>

	<td class="id">
		Trm0096a
	</td>

	<td class="composer">
		D'India
	</td>

	<td class="date">
		1615
	</td>

	<td class="title">
			<i>Donna quanto più a dentro</i> (rime 96)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0096a&filter=homophonic2">14.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0097b&filter=homophonic">48.1%</a>
	</td>

	<td class="id">
		Trm0097b
	</td>

	<td class="composer">
		Hassler
	</td>

	<td class="date">
		1596
	</td>

	<td class="title">
			<i>A chi creder degg'io</i> (rime 97)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0097b&filter=homophonic2">37.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0099a&filter=homophonic">50.9%</a>
	</td>

	<td class="id">
		Trm0099a
	</td>

	<td class="composer">
		Luzzaschi
	</td>

	<td class="date">
		1576
	</td>

	<td class="title">
			<i>Geloso amante apro mill'occhi e giro</i> (rime 99)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0099a&filter=homophonic2">17.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0107a&filter=homophonic">37.7%</a>
	</td>

	<td class="id">
		Trm0107a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Arsi gran tempo, e del mio foco indegno</i> (rime 107)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0107a&filter=homophonic2">16.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0126a&filter=homophonic">82.3%</a>
	</td>

	<td class="id">
		Trm0126a
	</td>

	<td class="composer">
		Gabella
	</td>

	<td class="date">
		1585
	</td>

	<td class="title">
			<i>Tre gran donne vid'io ch'in esser belle</i> (rime 126)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0126a&filter=homophonic2">47%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0137a&filter=homophonic">31.8%</a>
	</td>

	<td class="id">
		Trm0137a
	</td>

	<td class="composer">
		Virchi
	</td>

	<td class="date">
		1584
	</td>

	<td class="title">
			<i>Non fonte o fiume od aura</i> (rime 137)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0137a&filter=homophonic2">9.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0137b&filter=homophonic">70.8%</a>
	</td>

	<td class="id">
		Trm0137b
	</td>

	<td class="composer">
		Bozi
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Non fonte o fiume od aura</i> (rime 137)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0137b&filter=homophonic2">37.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0139a&filter=homophonic">51.1%</a>
	</td>

	<td class="id">
		Trm0139a
	</td>

	<td class="composer">
		Villani
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Messaggera de l'alba</i> (rime 139)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0139a&filter=homophonic2">15.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0143a&filter=homophonic">42.5%</a>
	</td>

	<td class="id">
		Trm0143a
	</td>

	<td class="composer">
		Dueto
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Ecco mormorar l'onde</i> (rime 143)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0143a&filter=homophonic2">20.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0144a&filter=homophonic">49.5%</a>
	</td>

	<td class="id">
		Trm0144a
	</td>

	<td class="composer">
		Dueto
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Ore fermate il volo</i> (rime 144)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0144a&filter=homophonic2">27.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0152a&filter=homophonic">58.5%</a>
	</td>

	<td class="id">
		Trm0152a
	</td>

	<td class="composer">
		Pallavicino
	</td>

	<td class="date">
		1604
	</td>

	<td class="title">
			<i>Voi mi chiedeste il core</i> (rime 152)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0152a&filter=homophonic2">38.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0159a&filter=homophonic">63.5%</a>
	</td>

	<td class="id">
		Trm0159a
	</td>

	<td class="composer">
		Veggio
	</td>

	<td class="date">
		1574
	</td>

	<td class="title">
			<i>D'aria un tempo nudrimmi, e cibo e vita</i> (rime 159)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0159a&filter=homophonic2">15.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0159b&filter=homophonic">52.3%</a>
	</td>

	<td class="id">
		Trm0159b
	</td>

	<td class="composer">
		Feliciani
	</td>

	<td class="date">
		1579
	</td>

	<td class="title">
			<i>D'aria un tempo nudrimmi, e cibo e vita</i> (rime 159)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0159b&filter=homophonic2">19.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0164a&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Trm0164a
	</td>

	<td class="composer">
		Barbarino
	</td>

	<td class="date">
		1616
	</td>

	<td class="title">
			<i>Vuol che l'ami costei, ma duro freno</i> (rime 164)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0164a&filter=homophonic2">13.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0165d&filter=homophonic">68.6%</a>
	</td>

	<td class="id">
		Trm0165d
	</td>

	<td class="composer">
		Bozi
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Vorrei lagnarmi a pieno</i> (rime 165)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0165d&filter=homophonic2">22.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0166g&filter=homophonic">65.8%</a>
	</td>

	<td class="id">
		Trm0166g
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Se taccio, il duol s'avanza</i> (rime 166)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0166g&filter=homophonic2">32.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0166k&filter=homophonic">67%</a>
	</td>

	<td class="id">
		Trm0166k
	</td>

	<td class="composer">
		Nenna
	</td>

	<td class="date">
		1613
	</td>

	<td class="title">
			<i>Se taccio, il duol s'avanza</i> (rime 166)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0166k&filter=homophonic2">29%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0174a&filter=homophonic">47.1%</a>
	</td>

	<td class="id">
		Trm0174a
	</td>

	<td class="composer">
		Pozzo
	</td>

	<td class="date">
		1585
	</td>

	<td class="title">
			<i>Or che l'aura mia dolce altrove spira</i> (rime 174)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0174a&filter=homophonic2">11.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0175b&filter=homophonic">45.1%</a>
	</td>

	<td class="id">
		Trm0175b
	</td>

	<td class="composer">
		Il Verso
	</td>

	<td class="date">
		1605
	</td>

	<td class="title">
			<i>Vaghe Ninfe del Po, Ninfe sorelle</i> (rime 175)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0175b&filter=homophonic2">18.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0183b&filter=homophonic">47.7%</a>
	</td>

	<td class="id">
		Trm0183b
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Di nettare amoroso ebro la mente</i> (rime 183)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0183b&filter=homophonic2">28.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0189b&filter=homophonic">59.6%</a>
	</td>

	<td class="id">
		Trm0189b
	</td>

	<td class="composer">
		Tosone
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Secco è l'arbor gentile</i> (rime 189)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0189b&filter=homophonic2">43.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0191b&filter=homophonic">37.3%</a>
	</td>

	<td class="id">
		Trm0191b
	</td>

	<td class="composer">
		Tosone
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Arsi mentre m'amaste</i> (rime 191)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0191b&filter=homophonic2">19.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0194b&filter=homophonic">54.3%</a>
	</td>

	<td class="id">
		Trm0194b
	</td>

	<td class="composer">
		Naldi
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>La giovinetta scorza</i> (rime 194)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0194b&filter=homophonic2">23.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0198a&filter=homophonic">63.7%</a>
	</td>

	<td class="id">
		Trm0198a
	</td>

	<td class="composer">
		Vecoli
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Chi la felice pianta d'orïente</i> (rime 198)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0198a&filter=homophonic2">22.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0202a&filter=homophonic">59.2%</a>
	</td>

	<td class="id">
		Trm0202a
	</td>

	<td class="composer">
		Agostini
	</td>

	<td class="date">
		1582
	</td>

	<td class="title">
			<i>Picciola verga e bella</i> (rime 202)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0202a&filter=homophonic2">6.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0237a&filter=homophonic">45.9%</a>
	</td>

	<td class="id">
		Trm0237a
	</td>

	<td class="composer">
		Meldert
	</td>

	<td class="date">
		1575
	</td>

	<td class="title">
			<i>Negro era intorno e 'n bianche falde il cielo</i> (rime 237)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0237a&filter=homophonic2">15%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0241a&filter=homophonic">70.6%</a>
	</td>

	<td class="id">
		Trm0241a
	</td>

	<td class="composer">
		Nielsen
	</td>

	<td class="date">
		1606
	</td>

	<td class="title">
			<i>Mentre i dipinti augelli</i> (rime 241)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0241a&filter=homophonic2">22.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0242a&filter=homophonic">20.6%</a>
	</td>

	<td class="id">
		Trm0242a
	</td>

	<td class="composer">
		Zenaro
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>Sovra l'erbetta e i fiori</i> (rime 242)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0242a&filter=homophonic2">20.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0243a&filter=homophonic">55%</a>
	</td>

	<td class="id">
		Trm0243a
	</td>

	<td class="composer">
		Eremita
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>Fuggìa di poggio in poggio</i> (rime 243)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0243a&filter=homophonic2">18.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0244a&filter=homophonic">39.3%</a>
	</td>

	<td class="id">
		Trm0244a
	</td>

	<td class="composer">
		Virchi
	</td>

	<td class="date">
		1584
	</td>

	<td class="title">
			<i>Qual cervo errando suole</i> (rime 244)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0244a&filter=homophonic2">9.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0246a&filter=homophonic">42.5%</a>
	</td>

	<td class="id">
		Trm0246a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1595
	</td>

	<td class="title">
			<i>Al lume delle stelle</i> (rime 246)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0246a&filter=homophonic2">26.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0247a&filter=homophonic">73.1%</a>
	</td>

	<td class="id">
		Trm0247a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1584
	</td>

	<td class="title">
			<i>Io vidi già sotto l'ardente sole</i> (rime 247)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0247a&filter=homophonic2">15.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0248a&filter=homophonic">74.5%</a>
	</td>

	<td class="id">
		Trm0248a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1584
	</td>

	<td class="title">
			<i>Vita de la mia vita</i> (rime 248)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0248a&filter=homophonic2">40.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0248d&filter=homophonic">42.9%</a>
	</td>

	<td class="id">
		Trm0248d
	</td>

	<td class="composer">
		Genvino
	</td>

	<td class="date">
		1605
	</td>

	<td class="title">
			<i>Vita de la mia vita</i> (rime 248)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0248d&filter=homophonic2">20.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0255a&filter=homophonic">33.1%</a>
	</td>

	<td class="id">
		Trm0255a
	</td>

	<td class="composer">
		Giovannelli
	</td>

	<td class="date">
		1599
	</td>

	<td class="title">
			<i>Mentre in grembo a la madre Amore un giorno</i> (rime 255)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0255a&filter=homophonic2">13%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0257a&filter=homophonic">45.3%</a>
	</td>

	<td class="id">
		Trm0257a
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Ardi, Amor, se ti piace</i> (rime 257)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0257a&filter=homophonic2">26.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0261b&filter=homophonic">20.2%</a>
	</td>

	<td class="id">
		Trm0261b
	</td>

	<td class="composer">
		Macque
	</td>

	<td class="date">
		1610
	</td>

	<td class="title">
			<i>Mentre volgea il mio sole</i> (rime 261)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0261b&filter=homophonic2">12.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0265a&filter=homophonic">80.8%</a>
	</td>

	<td class="id">
		Trm0265a
	</td>

	<td class="composer">
		Hassler
	</td>

	<td class="date">
		1596
	</td>

	<td class="title">
			<i>Mentre la donna mia cangiando aspetto</i> (rime 265)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0265a&filter=homophonic2">40.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0267a&filter=homophonic">38.6%</a>
	</td>

	<td class="id">
		Trm0267a
	</td>

	<td class="composer">
		Zenaro
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>Bella non è costei</i> (rime 267)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0267a&filter=homophonic2">26.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0272b&filter=homophonic">38.7%</a>
	</td>

	<td class="id">
		Trm0272b
	</td>

	<td class="composer">
		Gastoldi
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Occhi leggiadri e belli,/Nel vostro dolce nero</i> (rime 272)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0272b&filter=homophonic2">6.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0275a&filter=homophonic">57%</a>
	</td>

	<td class="id">
		Trm0275a
	</td>

	<td class="composer">
		Recalchi
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>O via più bianca e fredda</i> (rime 275)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0275a&filter=homophonic2">20.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0276a&filter=homophonic">58.6%</a>
	</td>

	<td class="id">
		Trm0276a
	</td>

	<td class="composer">
		Bacchini
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Più che Dïana è bella e più mi piace</i> (rime 276)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0276a&filter=homophonic2">13.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0277a&filter=homophonic">60.2%</a>
	</td>

	<td class="id">
		Trm0277a
	</td>

	<td class="composer">
		Cantino
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Perché la mia Dïana, anzi 'l mio sole</i> (rime 277)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0277a&filter=homophonic2">17%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0279a&filter=homophonic">34%</a>
	</td>

	<td class="id">
		Trm0279a
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Al discioglier d'un groppo</i> (rime 279)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0279a&filter=homophonic2">6.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0284c&filter=homophonic">44.4%</a>
	</td>

	<td class="id">
		Trm0284c
	</td>

	<td class="composer">
		Macque
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Questa vostra pietate</i> (rime 284)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0284c&filter=homophonic2">32.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0288g&filter=homophonic">51.9%</a>
	</td>

	<td class="id">
		Trm0288g
	</td>

	<td class="composer">
		Bozi
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Amatemi, ben mio</i> (rime 288)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0288g&filter=homophonic2">13.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0288h&filter=homophonic">61%</a>
	</td>

	<td class="id">
		Trm0288h
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Amatemi, ben mio</i> (rime 288)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0288h&filter=homophonic2">24.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0288i&filter=homophonic">40.4%</a>
	</td>

	<td class="id">
		Trm0288i
	</td>

	<td class="composer">
		Montella
	</td>

	<td class="date">
		1595
	</td>

	<td class="title">
			<i>Amatemi, ben mio</i> (rime 288)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0288i&filter=homophonic2">14.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0289a&filter=homophonic">63.2%</a>
	</td>

	<td class="id">
		Trm0289a
	</td>

	<td class="composer">
		Bonini
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Già tu volasti quattro volte e sei</i> (rime 289)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0289a&filter=homophonic2">34%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0297a&filter=homophonic">70.2%</a>
	</td>

	<td class="id">
		Trm0297a
	</td>

	<td class="composer">
		Vecchi
	</td>

	<td class="date">
		1580
	</td>

	<td class="title">
			<i>Se 'l vostro volto è d'un'aria gentile</i> (rime 297)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0297a&filter=homophonic2">42.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0302a&filter=homophonic">45.9%</a>
	</td>

	<td class="id">
		Trm0302a
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Siepe, che gli orti vaghi</i> (rime 302)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0302a&filter=homophonic2">37.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0303a&filter=homophonic">44.4%</a>
	</td>

	<td class="id">
		Trm0303a
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Sarai termine ancora</i> (rime 303)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0303a&filter=homophonic2">24.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0307a&filter=homophonic">39.4%</a>
	</td>

	<td class="id">
		Trm0307a
	</td>

	<td class="composer">
		Zenaro
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>Non sono in queste rive</i> (rime 307)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0307a&filter=homophonic2">11.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0309a&filter=homophonic">44.3%</a>
	</td>

	<td class="id">
		Trm0309a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1595
	</td>

	<td class="title">
			<i>O verdi selve, o dolci fonti, o rivi</i> (rime 309)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0309a&filter=homophonic2">18%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0315b&filter=homophonic">44.9%</a>
	</td>

	<td class="id">
		Trm0315b
	</td>

	<td class="composer">
		Nenna
	</td>

	<td class="date">
		1607
	</td>

	<td class="title">
			<i>Quella candida mano/Ch'a mezzo il verno i vaghi fiori accinse</i> (rime 315)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0315b&filter=homophonic2">3.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0318a&filter=homophonic">53.8%</a>
	</td>

	<td class="id">
		Trm0318a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1585
	</td>

	<td class="title">
			<i>Sovra un lucido rio</i> (rime 318)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0318a&filter=homophonic2">26.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0318c&filter=homophonic">43.3%</a>
	</td>

	<td class="id">
		Trm0318c
	</td>

	<td class="composer">
		Zenaro
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>Sovra un lucido rio</i> (rime 318)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0318c&filter=homophonic2">28.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0319a&filter=homophonic">43.9%</a>
	</td>

	<td class="id">
		Trm0319a
	</td>

	<td class="composer">
		Gastoldi
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Non può l'angusto loco</i> (rime 319)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0319a&filter=homophonic2">15.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0322a&filter=homophonic">34.5%</a>
	</td>

	<td class="id">
		Trm0322a
	</td>

	<td class="composer">
		D'India
	</td>

	<td class="date">
		1616
	</td>

	<td class="title">
			<i>Donna, lunge da voi</i> (rime 322)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0322a&filter=homophonic2">5.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0323a&filter=homophonic">34.2%</a>
	</td>

	<td class="id">
		Trm0323a
	</td>

	<td class="composer">
		Garzi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Lontano dal mio cuore</i> (rime 323)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0323a&filter=homophonic2">37.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0325c&filter=homophonic">60.4%</a>
	</td>

	<td class="id">
		Trm0325c
	</td>

	<td class="composer">
		Salzilli
	</td>

	<td class="date">
		1611
	</td>

	<td class="title">
			<i>O dolci lagrimette</i> (rime 325)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0325c&filter=homophonic2">28.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0326d&filter=homophonic">53.5%</a>
	</td>

	<td class="id">
		Trm0326d
	</td>

	<td class="composer">
		Dentice
	</td>

	<td class="date">
		1607
	</td>

	<td class="title">
			<i>Lunge da gli occhi vostri</i> (rime 326)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0326d&filter=homophonic2">20.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0333a&filter=homophonic">74.7%</a>
	</td>

	<td class="id">
		Trm0333a
	</td>

	<td class="composer">
		Bellasio
	</td>

	<td class="date">
		1578
	</td>

	<td class="title">
			<i>Gelo ha Madonna il seno</i> (rime 333)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0333a&filter=homophonic2">47%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0333b&filter=homophonic">61%</a>
	</td>

	<td class="id">
		Trm0333b
	</td>

	<td class="composer">
		Merulo
	</td>

	<td class="date">
		1579
	</td>

	<td class="title">
			<i>Gelo ha Madonna il seno</i> (rime 333)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0333b&filter=homophonic2">10.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0333e&filter=homophonic">52.7%</a>
	</td>

	<td class="id">
		Trm0333e
	</td>

	<td class="composer">
		Macque
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Gelo ha Madonna il seno</i> (rime 333)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0333e&filter=homophonic2">10%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0333g&filter=homophonic">61.9%</a>
	</td>

	<td class="id">
		Trm0333g
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Gelo ha Madonna il seno</i> (rime 333)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0333g&filter=homophonic2">33.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0333i&filter=homophonic">59.8%</a>
	</td>

	<td class="id">
		Trm0333i
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Gelo ha Madonna il seno</i> (rime 333)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0333i&filter=homophonic2">28.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0335d&filter=homophonic">31.7%</a>
	</td>

	<td class="id">
		Trm0335d
	</td>

	<td class="composer">
		Zenaro
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>Voi bramate, ben mio</i> (rime 335)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0335d&filter=homophonic2">28.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0335f&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Trm0335f
	</td>

	<td class="composer">
		Fonghetti
	</td>

	<td class="date">
		1598
	</td>

	<td class="title">
			<i>Voi bramate, ben mio</i> (rime 335)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0335f&filter=homophonic2">34.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0339b&filter=homophonic">26.3%</a>
	</td>

	<td class="id">
		Trm0339b
	</td>

	<td class="composer">
		Giovannelli
	</td>

	<td class="date">
		1593
	</td>

	<td class="title">
			<i>Dolcissimi legami</i> (rime 339)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0339b&filter=homophonic2">1.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0341a&filter=homophonic">51.8%</a>
	</td>

	<td class="id">
		Trm0341a
	</td>

	<td class="composer">
		Guami
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Fuggi, fuggi, dolor, da questo petto</i> (rime 341)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0341a&filter=homophonic2">27.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0343a&filter=homophonic">28%</a>
	</td>

	<td class="id">
		Trm0343a
	</td>

	<td class="composer">
		Bellasio
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Soavissimo canto</i> (rime 343)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0343a&filter=homophonic2">22.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0345a&filter=homophonic">62.5%</a>
	</td>

	<td class="id">
		Trm0345a
	</td>

	<td class="composer">
		Preti
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Tra mille fior già colti in dolce speco</i> (rime 345)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0345a&filter=homophonic2">33.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0358b&filter=homophonic">18.8%</a>
	</td>

	<td class="id">
		Trm0358b
	</td>

	<td class="composer">
		Cerbello
	</td>

	<td class="date">
		1619
	</td>

	<td class="title">
			<i>Amarilli s'io te miro</i> (rime 358)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0358b&filter=homophonic2">41%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0361a&filter=homophonic">84.3%</a>
	</td>

	<td class="id">
		Trm0361a
	</td>

	<td class="composer">
		Lambardi
	</td>

	<td class="date">
		1614
	</td>

	<td class="title">
			<i>Io son la Primavera</i> (rime 361)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0361a&filter=homophonic2">50%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0361b&filter=homophonic">36.7%</a>
	</td>

	<td class="id">
		Trm0361b
	</td>

	<td class="composer">
		Hodemont
	</td>

	<td class="date">
		1625
	</td>

	<td class="title">
			<i>Io son la Primavera</i> (rime 361)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0361b&filter=homophonic2">23%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0361c&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Trm0361c
	</td>

	<td class="composer">
		Stefani
	</td>

	<td class="date">
		1620
	</td>

	<td class="title">
			<i>Io son la Primavera</i> (rime 361)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0361c&filter=homophonic2">58.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0362a&filter=homophonic">69.5%</a>
	</td>

	<td class="id">
		Trm0362a
	</td>

	<td class="composer">
		Dueto
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Questo riposto bel vago boschetto</i> (rime 362)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0362a&filter=homophonic2">56.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0363a&filter=homophonic">40.7%</a>
	</td>

	<td class="id">
		Trm0363a
	</td>

	<td class="composer">
		Hassler
	</td>

	<td class="date">
		1596
	</td>

	<td class="title">
			<i>Qui dove i sacri e verdeggianti allori</i> (rime 363)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0363a&filter=homophonic2">10.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0366a&filter=homophonic">61.2%</a>
	</td>

	<td class="id">
		Trm0366a
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Odi, Filli, che tuona; odi che 'n gelo</i> (rime 366)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0366a&filter=homophonic2">45.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0367a&filter=homophonic">40.8%</a>
	</td>

	<td class="id">
		Trm0367a
	</td>

	<td class="composer">
		Luzzaschi
	</td>

	<td class="date">
		1576
	</td>

	<td class="title">
			<i>Aminta poi ch'a Filli non dispiacque</i> (rime 367)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0367a&filter=homophonic2">11.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0371b&filter=homophonic">65.7%</a>
	</td>

	<td class="id">
		Trm0371b
	</td>

	<td class="composer">
		Bozi
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Tre son le Grazie ancelle</i> (rime 371)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0371b&filter=homophonic2">36.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0372b&filter=homophonic">59.7%</a>
	</td>

	<td class="id">
		Trm0372b
	</td>

	<td class="composer">
		Mancini
	</td>

	<td class="date">
		1605
	</td>

	<td class="title">
			<i>Bruna sei tu ma bella</i> (rime 372)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0372b&filter=homophonic2">30.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0373a&filter=homophonic">15.4%</a>
	</td>

	<td class="id">
		Trm0373a
	</td>

	<td class="composer">
		Vignali
	</td>

	<td class="date">
		1640
	</td>

	<td class="title">
			<i>Bella e vaga brunetta</i> (rime 373)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0373a&filter=homophonic2">14.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0378f&filter=homophonic">66.1%</a>
	</td>

	<td class="id">
		Trm0378f
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Nel dolce seno de la bella Clori</i> (rime 378)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0378f&filter=homophonic2">39%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0379b&filter=homophonic">33.1%</a>
	</td>

	<td class="id">
		Trm0379b
	</td>

	<td class="composer">
		Gallo
	</td>

	<td class="date">
		1598
	</td>

	<td class="title">
			<i>Non si levava ancor l'alba novella</i> (rime 379)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0379b&filter=homophonic2">4.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0380b&filter=homophonic">53.6%</a>
	</td>

	<td class="id">
		Trm0380b
	</td>

	<td class="composer">
		Nenna
	</td>

	<td class="date">
		1607
	</td>

	<td class="title">
			<i>Viviamo, amianci, o mia gradita Jelle</i> (rime 380)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0380b&filter=homophonic2">20.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0389b&filter=homophonic">67.2%</a>
	</td>

	<td class="id">
		Trm0389b
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Donna, se ben le chiome ho già ripiene</i> (rime 389)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0389b&filter=homophonic2">35.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0395b&filter=homophonic">43.7%</a>
	</td>

	<td class="id">
		Trm0395b
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1584
	</td>

	<td class="title">
			<i>In un bel bosco leggiadre fronde</i> (rime 395)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0395b&filter=homophonic2">14.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0395c&filter=homophonic">53.9%</a>
	</td>

	<td class="id">
		Trm0395c
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>In un bel bosco leggiadre fronde</i> (rime 395)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0395c&filter=homophonic2">29.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0399b&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Trm0399b
	</td>

	<td class="composer">
		Marini
	</td>

	<td class="date">
		1635
	</td>

	<td class="title">
			<i>O vaga tortorella</i> (rime 399)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0399b&filter=homophonic2">66.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0407a&filter=homophonic">56.3%</a>
	</td>

	<td class="id">
		Trm0407a
	</td>

	<td class="composer">
		Mel
	</td>

	<td class="date">
		1584
	</td>

	<td class="title">
			<i>La natura compose</i> (rime 407)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0407a&filter=homophonic2">22%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0408a&filter=homophonic">53.9%</a>
	</td>

	<td class="id">
		Trm0408a
	</td>

	<td class="composer">
		Bozi
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Questo tra gli altri fiori</i> (rime 408)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0408a&filter=homophonic2">21.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0418g&filter=homophonic">55.1%</a>
	</td>

	<td class="id">
		Trm0418g
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Ardi e gela a tua voglia</i> (rime 418)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0418g&filter=homophonic2">42.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0418w&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Trm0418w
	</td>

	<td class="composer">
		Fornaci
	</td>

	<td class="date">
		1617
	</td>

	<td class="title">
			<i>Ardi e gela a tua voglia</i> (rime 418)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0418w&filter=homophonic2">28.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0433a&filter=homophonic">72.3%</a>
	</td>

	<td class="id">
		Trm0433a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1583
	</td>

	<td class="title">
			<i>Se tu mi lasci, perfida, tuo danno</i> (rime 433)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0433a&filter=homophonic2">48.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0433b&filter=homophonic">31.3%</a>
	</td>

	<td class="id">
		Trm0433b
	</td>

	<td class="composer">
		Stivori
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Se tu mi lasci, perfida, tuo danno</i> (rime 433)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0433b&filter=homophonic2">16.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0443c&filter=homophonic">58.3%</a>
	</td>

	<td class="id">
		Trm0443c
	</td>

	<td class="composer">
		Bozi
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Questa vita è la selva, il verde e l'ombra</i> (rime 443)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0443c&filter=homophonic2">24.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0495a&filter=homophonic">53.6%</a>
	</td>

	<td class="id">
		Trm0495a
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Se così dolce è il duolo</i> (rime 495)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0495a&filter=homophonic2">30.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0541a&filter=homophonic">52.4%</a>
	</td>

	<td class="id">
		Trm0541a
	</td>

	<td class="composer">
		Wert
	</td>

	<td class="date">
		1577
	</td>

	<td class="title">
			<i>Tolse BARBARA gente il pregio a Roma</i> (rime 541)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0541a&filter=homophonic2">28.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0549a&filter=homophonic">60.2%</a>
	</td>

	<td class="id">
		Trm0549a
	</td>

	<td class="composer">
		Isnardi
	</td>

	<td class="date">
		1577
	</td>

	<td class="title">
			<i>Quel labbro che le rose han colorito</i> (rime 549)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0549a&filter=homophonic2">21.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0553a&filter=homophonic">28.9%</a>
	</td>

	<td class="id">
		Trm0553a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1585
	</td>

	<td class="title">
			<i>Sul carro de la mente auriga siedi</i> (rime 553)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0553a&filter=homophonic2">16.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0558a&filter=homophonic">63.1%</a>
	</td>

	<td class="id">
		Trm0558a
	</td>

	<td class="composer">
		Meldert
	</td>

	<td class="date">
		1575
	</td>

	<td class="title">
			<i>Facelle son d'immortal luce ardenti</i> (rime 558)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0558a&filter=homophonic2">30.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0560a&filter=homophonic">43.8%</a>
	</td>

	<td class="id">
		Trm0560a
	</td>

	<td class="composer">
		Vinci
	</td>

	<td class="date">
		1573
	</td>

	<td class="title">
			<i>Tarquinia, se rimiri</i> (rime 560)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0560a&filter=homophonic2">22.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0560b&filter=homophonic">81%</a>
	</td>

	<td class="id">
		Trm0560b
	</td>

	<td class="composer">
		Bellasio
	</td>

	<td class="date">
		1578
	</td>

	<td class="title">
			<i>Tarquinia, se rimiri</i> (rime 560)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0560b&filter=homophonic2">54.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0560c&filter=homophonic">72.8%</a>
	</td>

	<td class="id">
		Trm0560c
	</td>

	<td class="composer">
		Merulo
	</td>

	<td class="date">
		1579
	</td>

	<td class="title">
			<i>Tarquinia, se rimiri</i> (rime 560)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0560c&filter=homophonic2">20.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0560f&filter=homophonic">41.9%</a>
	</td>

	<td class="id">
		Trm0560f
	</td>

	<td class="composer">
		Macque
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Tarquinia, se rimiri</i> (rime 560)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0560f&filter=homophonic2">29.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0560i&filter=homophonic">78%</a>
	</td>

	<td class="id">
		Trm0560i
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Tarquinia, se rimiri</i> (rime 560)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0560i&filter=homophonic2">33.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0560m&filter=homophonic">76.6%</a>
	</td>

	<td class="id">
		Trm0560m
	</td>

	<td class="composer">
		Alberti
	</td>

	<td class="date">
		1603
	</td>

	<td class="title">
			<i>Tarquinia, se rimiri</i> (rime 560)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0560m&filter=homophonic2">34.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0560o&filter=homophonic">40.5%</a>
	</td>

	<td class="id">
		Trm0560o
	</td>

	<td class="composer">
		Spano
	</td>

	<td class="date">
		1608
	</td>

	<td class="title">
			<i>Tarquinia, se rimiri</i> (rime 560)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0560o&filter=homophonic2">14.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0571b&filter=homophonic">61.4%</a>
	</td>

	<td class="id">
		Trm0571b
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Se da sì nobil mano</i> (rime 571)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0571b&filter=homophonic2">26.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0592a&filter=homophonic">69.2%</a>
	</td>

	<td class="id">
		Trm0592a
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Negli anni acerbi tua purpurea rosa</i> (rime 592)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0592a&filter=homophonic2">36.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0602c&filter=homophonic">73.6%</a>
	</td>

	<td class="id">
		Trm0602c
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Caro amoroso neo</i> (rime 602)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0602c&filter=homophonic2">36.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0602d&filter=homophonic">59.4%</a>
	</td>

	<td class="id">
		Trm0602d
	</td>

	<td class="composer">
		Effrem
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Caro amoroso neo</i> (rime 602)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0602d&filter=homophonic2">33.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0602e&filter=homophonic">57.1%</a>
	</td>

	<td class="id">
		Trm0602e
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Caro amoroso neo</i> (rime 602)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0602e&filter=homophonic2">20.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0611a&filter=homophonic">58.4%</a>
	</td>

	<td class="id">
		Trm0611a
	</td>

	<td class="composer">
		Corfini
	</td>

	<td class="date">
		1575
	</td>

	<td class="title">
			<i>La bella pargoletta</i> (rime 611)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0611a&filter=homophonic2">2.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0611b&filter=homophonic">55.5%</a>
	</td>

	<td class="id">
		Trm0611b
	</td>

	<td class="composer">
		Dragoni
	</td>

	<td class="date">
		1575
	</td>

	<td class="title">
			<i>La bella pargoletta</i> (rime 611)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0611b&filter=homophonic2">30.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0611c&filter=homophonic">68.4%</a>
	</td>

	<td class="id">
		Trm0611c
	</td>

	<td class="composer">
		Feliciani
	</td>

	<td class="date">
		1575
	</td>

	<td class="title">
			<i>La bella pargoletta</i> (rime 611)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0611c&filter=homophonic2">35.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0611d&filter=homophonic">43.2%</a>
	</td>

	<td class="id">
		Trm0611d
	</td>

	<td class="composer">
		Isnardi
	</td>

	<td class="date">
		1577
	</td>

	<td class="title">
			<i>La bella pargoletta</i> (rime 611)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0611d&filter=homophonic2">7.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0611m&filter=homophonic">36.4%</a>
	</td>

	<td class="id">
		Trm0611m
	</td>

	<td class="composer">
		Bellaver
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>La bella pargoletta</i> (rime 611)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0611m&filter=homophonic2">18.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0612a&filter=homophonic">56.5%</a>
	</td>

	<td class="id">
		Trm0612a
	</td>

	<td class="composer">
		Porta
	</td>

	<td class="date">
		1573
	</td>

	<td class="title">
			<i>Del puro lume onde i celesti giri</i> (rime 612)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0612a&filter=homophonic2">24.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0614a&filter=homophonic">67.4%</a>
	</td>

	<td class="id">
		Trm0614a
	</td>

	<td class="composer">
		Pordenon
	</td>

	<td class="date">
		1573
	</td>

	<td class="title">
			<i>Al vostro dolce azzurro</i> (rime 614)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0614a&filter=homophonic2">33.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0614b&filter=homophonic">64.4%</a>
	</td>

	<td class="id">
		Trm0614b
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1579
	</td>

	<td class="title">
			<i>Al vostro dolce azzurro</i> (rime 614)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0614b&filter=homophonic2">20.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0614c&filter=homophonic">30.3%</a>
	</td>

	<td class="id">
		Trm0614c
	</td>

	<td class="composer">
		Ingegneri
	</td>

	<td class="date">
		1579
	</td>

	<td class="title">
			<i>Al vostro dolce azzurro</i> (rime 614)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0614c&filter=homophonic2">12.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0614h&filter=homophonic">81.5%</a>
	</td>

	<td class="id">
		Trm0614h
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Al vostro dolce azzurro</i> (rime 614)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0614h&filter=homophonic2">44%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0614j&filter=homophonic">51.2%</a>
	</td>

	<td class="id">
		Trm0614j
	</td>

	<td class="composer">
		Genvino
	</td>

	<td class="date">
		1605
	</td>

	<td class="title">
			<i>Al vostro dolce azzurro</i> (rime 614)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0614j&filter=homophonic2">16.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0615b&filter=homophonic">64.2%</a>
	</td>

	<td class="id">
		Trm0615b
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Al tuo vago pallore</i> (rime 615)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0615b&filter=homophonic2">33.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0707a&filter=homophonic">60.5%</a>
	</td>

	<td class="id">
		Trm0707a
	</td>

	<td class="composer">
		Agostini
	</td>

	<td class="date">
		1582
	</td>

	<td class="title">
			<i>Tra Giove in cielo e 'l mio signor in terra</i> (rime 707)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0707a&filter=homophonic2">2.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0734b&filter=homophonic">59%</a>
	</td>

	<td class="id">
		Trm0734b
	</td>

	<td class="composer">
		Dueto
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>ANGIOLETTA cortese</i> (rime 734)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0734b&filter=homophonic2">28.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0735b&filter=homophonic">62.2%</a>
	</td>

	<td class="id">
		Trm0735b
	</td>

	<td class="composer">
		Gesualdo
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Bella ANGIOLETTA da le vaghe piume</i> (rime 735)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0735b&filter=homophonic2">34.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0760a&filter=homophonic">63.9%</a>
	</td>

	<td class="id">
		Trm0760a
	</td>

	<td class="composer">
		Ferrabosco
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Quant'io sono infelice</i> (rime 760)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0760a&filter=homophonic2">10.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0770a&filter=homophonic">55.9%</a>
	</td>

	<td class="id">
		Trm0770a
	</td>

	<td class="composer">
		Verdonck
	</td>

	<td class="date">
		1603
	</td>

	<td class="title">
			<i>Né di feconda conca in ricco mare</i> (rime 770)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0770a&filter=homophonic2">9.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0862a&filter=homophonic">42.7%</a>
	</td>

	<td class="id">
		Trm0862a
	</td>

	<td class="composer">
		Raval
	</td>

	<td class="date">
		1593
	</td>

	<td class="title">
			<i>La bella e vaga man che le sonore </i> (rime 862)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0862a&filter=homophonic2">8.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0865a&filter=homophonic">78.8%</a>
	</td>

	<td class="id">
		Trm0865a
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Deh! perché amar chi voi con pari affetto</i> (rime 865)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0865a&filter=homophonic2">13.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0896b&filter=homophonic">44.2%</a>
	</td>

	<td class="id">
		Trm0896b
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Forse è cagion l'aurora</i> (rime 896)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0896b&filter=homophonic2">20.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0901a&filter=homophonic">63.8%</a>
	</td>

	<td class="id">
		Trm0901a
	</td>

	<td class="composer">
		Giovannelli
	</td>

	<td class="date">
		1593
	</td>

	<td class="title">
			<i>O timida lepretta</i> (rime 901)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0901a&filter=homophonic2">31.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0903a&filter=homophonic">25%</a>
	</td>

	<td class="id">
		Trm0903a
	</td>

	<td class="composer">
		Zenaro
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>O fuggitiva e timidetta fiera</i> (rime 903)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0903a&filter=homophonic2">16.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0929a&filter=homophonic">58.9%</a>
	</td>

	<td class="id">
		Trm0929a
	</td>

	<td class="composer">
		Wert
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Mesola, il Po da' lati e 'l mar a fronte</i> (rime 929)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0929a&filter=homophonic2">10.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm0930a&filter=homophonic">73.2%</a>
	</td>

	<td class="id">
		Trm0930a
	</td>

	<td class="composer">
		Wert
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Ha ninfe adorne e belle</i> (rime 930)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm0930a&filter=homophonic2">9.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1021a&filter=homophonic">37.2%</a>
	</td>

	<td class="id">
		Trm1021a
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1595
	</td>

	<td class="title">
			<i>Là dove sono i pargoletti Amori</i> (rime 1021)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1021a&filter=homophonic2">14.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1022a&filter=homophonic">43.3%</a>
	</td>

	<td class="id">
		Trm1022a
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Voi sete bella, ma fugage e presta</i> (rime 1022)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1022a&filter=homophonic2">13.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1032a&filter=homophonic">51.9%</a>
	</td>

	<td class="id">
		Trm1032a
	</td>

	<td class="composer">
		Giovannelli
	</td>

	<td class="date">
		1592
	</td>

	<td class="title">
			<i>Tu nascesti di furto</i> (rime 1032)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1032a&filter=homophonic2">15.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1048a&filter=homophonic">17.9%</a>
	</td>

	<td class="id">
		Trm1048a
	</td>

	<td class="composer">
		Guami
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Queste note io vi dono</i> (rime 1048)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1048a&filter=homophonic2">9.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1049a&filter=homophonic">47.5%</a>
	</td>

	<td class="id">
		Trm1049a
	</td>

	<td class="composer">
		Zenaro
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>Queste note son nove, e queste Amore</i> (rime 1049)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1049a&filter=homophonic2">32.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1082a&filter=homophonic">49.5%</a>
	</td>

	<td class="id">
		Trm1082a
	</td>

	<td class="composer">
		Philips
	</td>

	<td class="date">
		1603
	</td>

	<td class="title">
			<i>Deh ferma, ferma il tuo ribello, Amore</i> (rime 1082)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1082a&filter=homophonic2">12.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1203a&filter=homophonic">70%</a>
	</td>

	<td class="id">
		Trm1203a
	</td>

	<td class="composer">
		Gherardini
	</td>

	<td class="date">
		1585
	</td>

	<td class="title">
			<i>Qual cavalier ardito</i> (rime 1203)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1203a&filter=homophonic2">25.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1205b&filter=homophonic">75%</a>
	</td>

	<td class="id">
		Trm1205b
	</td>

	<td class="composer">
		Gherardini
	</td>

	<td class="date">
		1585
	</td>

	<td class="title">
			<i>Tu moristi in quel seno</i> (rime 1205)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1205b&filter=homophonic2">47.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1276a&filter=homophonic">37.5%</a>
	</td>

	<td class="id">
		Trm1276a
	</td>

	<td class="composer">
		Vignali
	</td>

	<td class="date">
		1640
	</td>

	<td class="title">
			<i>Tu, bianca e vaga Luna</i> (rime 1276)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1276a&filter=homophonic2">43.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1370a&filter=homophonic">35.3%</a>
	</td>

	<td class="id">
		Trm1370a
	</td>

	<td class="composer">
		Cortellini
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Qui dove fan le piante</i> (rime 1370)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1370a&filter=homophonic2">7.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1497a&filter=homophonic">63.1%</a>
	</td>

	<td class="id">
		Trm1497a
	</td>

	<td class="composer">
		Cirullo
	</td>

	<td class="date">
		1598
	</td>

	<td class="title">
			<i>Ferro in ferir pietoso</i> (rime 1497)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1497a&filter=homophonic2">27.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1637a&filter=homophonic">36.7%</a>
	</td>

	<td class="id">
		Trm1637a
	</td>

	<td class="composer">
		Gastoldi
	</td>

	<td class="date">
		1587
	</td>

	<td class="title">
			<i>Anime sante e belle</i> (rime 1637)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1637a&filter=homophonic2">3.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1688b&filter=homophonic">60.4%</a>
	</td>

	<td class="id">
		Trm1688b
	</td>

	<td class="composer">
		Marenzio
	</td>

	<td class="date">
		1584
	</td>

	<td class="title">
			<i>Padre del cielo, or ch'atra nube il calle</i> (rime 1688)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1688b&filter=homophonic2">16.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1688c&filter=homophonic">51.8%</a>
	</td>

	<td class="id">
		Trm1688c
	</td>

	<td class="composer">
		Dueto
	</td>

	<td class="date">
		1586
	</td>

	<td class="title">
			<i>Padre del cielo, or ch'atra nube il calle</i> (rime 1688)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1688c&filter=homophonic2">21.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm1688d&filter=homophonic">48.5%</a>
	</td>

	<td class="id">
		Trm1688d
	</td>

	<td class="composer">
		Monte
	</td>

	<td class="date">
		1589
	</td>

	<td class="title">
			<i>Padre del cielo, or ch'atra nube il calle</i> (rime 1688)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm1688d&filter=homophonic2">9.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trm9999a&filter=homophonic">77.8%</a>
	</td>

	<td class="id">
		Trm9999a
	</td>

	<td class="composer">
		Lambardi
	</td>

	<td class="date">
		1614
	</td>

	<td class="title">
			<i>Occhi leggiadri e belli/ Or che volete più dal petto mio?</i> (rime 9999)
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trm9999a&filter=homophonic2">32.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam1020338b&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Tam1020338b
	</td>

	<td class="composer">
		Melli
	</td>

	<td class="date">
		1602
	</td>

	<td class="title">
			<i>Ho visto al pianto mio</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam1020338b&filter=homophonic2">0.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam1020338c&filter=homophonic">84.9%</a>
	</td>

	<td class="id">
		Tam1020338c
	</td>

	<td class="composer">
		Massaino
	</td>

	<td class="date">
		1604
	</td>

	<td class="title">
			<i>Ho visto al pianto mio</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam1020338c&filter=homophonic2">71.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam1020338d&filter=homophonic">66.5%</a>
	</td>

	<td class="id">
		Tam1020338d
	</td>

	<td class="composer">
		Boschetti
	</td>

	<td class="date">
		1613
	</td>

	<td class="title">
			<i>Ho visto al pianto mio</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam1020338d&filter=homophonic2">49.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam1020338e&filter=homophonic">!!!COM: Benedetti, Piero%</a>
	</td>

	<td class="id">
		Tam1020338e
	</td>

	<td class="composer">
		Benedetti
	</td>

	<td class="date">
		1617
	</td>

	<td class="title">
			<i>Ho visto al pianto mio</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam1020338e&filter=homophonic2">0%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2010724a&filter=homophonic">96.7%</a>
	</td>

	<td class="id">
		Tam2010724a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Picciola è l'ape e fa col picciol morso</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2010724a&filter=homophonic2">93.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031034a&filter=homophonic">78%</a>
	</td>

	<td class="id">
		Tam2031034a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Vorrò veder ciò che Tirsi avrà fatto</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031034a&filter=homophonic2">59%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031045a&filter=homophonic">68.1%</a>
	</td>

	<td class="id">
		Tam2031045a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Nove, Aminta, t'annuncio di conforto</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031045a&filter=homophonic2">38.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031052a&filter=homophonic">81%</a>
	</td>

	<td class="id">
		Tam2031052a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Qual ardir mi bisogna, e 'ncotra a cui?</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031052a&filter=homophonic2">73.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031061a&filter=homophonic">91.9%</a>
	</td>

	<td class="id">
		Tam2031061a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Bisogna a maggior prova ardir più grande</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031061a&filter=homophonic2">57.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031067a&filter=homophonic">39.3%</a>
	</td>

	<td class="id">
		Tam2031067a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Orsù scuoprimi il tutto. Odi. Di' tosto</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031067a&filter=homophonic2">26%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031075a&filter=homophonic">57.7%</a>
	</td>

	<td class="id">
		Tam2031075a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Dura conclusion, che tutte affosca</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031075a&filter=homophonic2">16%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031081a&filter=homophonic">85.5%</a>
	</td>

	<td class="id">
		Tam2031081a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>S'a mio senno farai, sarai felice</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031081a&filter=homophonic2">56.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031089a&filter=homophonic">87%</a>
	</td>

	<td class="id">
		Tam2031089a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Non sarà dunque ver ch'in quanto io posso</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031089a&filter=homophonic2">58.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031096a&filter=homophonic">72.5%</a>
	</td>

	<td class="id">
		Tam2031096a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Dunque tu l'ameresti a suo dispetto</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031096a&filter=homophonic2">36.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031100a&filter=homophonic">86.7%</a>
	</td>

	<td class="id">
		Tam2031100a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Perché dunque non osi oltre sua voglia</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031100a&filter=homophonic2">59.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031106a&filter=homophonic">49.4%</a>
	</td>

	<td class="id">
		Tam2031106a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Già per lungo uso a ragionar d'amore</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031106a&filter=homophonic2">24.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031109a&filter=homophonic">78.5%</a>
	</td>

	<td class="id">
		Tam2031109a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Dunque andar non vogliamo? Andare io voglio</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031109a&filter=homophonic2">55.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031113a&filter=homophonic">74.4%</a>
	</td>

	<td class="id">
		Tam2031113a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Credi tu dunque, sciocco, che mai Dafne</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031113a&filter=homophonic2">23.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031121a&filter=homophonic">73.8%</a>
	</td>

	<td class="id">
		Tam2031121a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>E s'ella vuol che 'l tuo diletto sia</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031121a&filter=homophonic2">40.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031126a&filter=homophonic">76.9%</a>
	</td>

	<td class="id">
		Tam2031126a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Ecco tu chiedi pur quella certezza</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031126a&filter=homophonic2">36%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam2031133a&filter=homophonic">75.8%</a>
	</td>

	<td class="id">
		Tam2031133a
	</td>

	<td class="composer">
		Balsamino
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Tu taci: tu sei vinto. Ora confessa</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam2031133a&filter=homophonic2">47.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam3021324a&filter=homophonic">42.1%</a>
	</td>

	<td class="id">
		Tam3021324a
	</td>

	<td class="composer">
		D'India
	</td>

	<td class="date">
		1615
	</td>

	<td class="title">
			<i>Dispietata pietate</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam3021324a&filter=homophonic2">25.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam3021417b&filter=homophonic">68.9%</a>
	</td>

	<td class="id">
		Tam3021417b
	</td>

	<td class="composer">
		Massaino
	</td>

	<td class="date">
		1604
	</td>

	<td class="title">
			<i>Dolor che sì mi crucii</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam3021417b&filter=homophonic2">30.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam3021430b&filter=homophonic">44.1%</a>
	</td>

	<td class="id">
		Tam3021430b
	</td>

	<td class="composer">
		Massaino
	</td>

	<td class="date">
		1604
	</td>

	<td class="title">
			<i>Bello e dolce morir fu certo allora</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam3021430b&filter=homophonic2">15%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam4011614a&filter=homophonic">39.2%</a>
	</td>

	<td class="id">
		Tam4011614a
	</td>

	<td class="composer">
		Ghizzolo
	</td>

	<td class="date">
		1608
	</td>

	<td class="title">
			<i>Misero Aminta!</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam4011614a&filter=homophonic2">24.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam4021779a&filter=homophonic">47.9%</a>
	</td>

	<td class="id">
		Tam4021779a
	</td>

	<td class="composer">
		Massaino
	</td>

	<td class="date">
		1604
	</td>

	<td class="title">
			<i>Pastor di che piangete?</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam4021779a&filter=homophonic2">8.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam4021827a&filter=homophonic">52.2%</a>
	</td>

	<td class="id">
		Tam4021827a
	</td>

	<td class="composer">
		Boschetti
	</td>

	<td class="date">
		1613
	</td>

	<td class="title">
			<i>Ciò che morte rallenta, Amor restringi</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam4021827a&filter=homophonic2">23.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam4021833a&filter=homophonic">60.1%</a>
	</td>

	<td class="id">
		Tam4021833a
	</td>

	<td class="composer">
		Boschetti
	</td>

	<td class="date">
		1613
	</td>

	<td class="title">
			<i>Non sono ire la sù: gli umani ingegni</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam4021833a&filter=homophonic2">25.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam5011850a&filter=homophonic">50.7%</a>
	</td>

	<td class="id">
		Tam5011850a
	</td>

	<td class="composer">
		Ghizzolo
	</td>

	<td class="date">
		1608
	</td>

	<td class="title">
			<i>Oh fortunato Aminta, oh te felice</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam5011850a&filter=homophonic2">32.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam5011934a&filter=homophonic">37.3%</a>
	</td>

	<td class="id">
		Tam5011934a
	</td>

	<td class="composer">
		Ghizzolo
	</td>

	<td class="date">
		1608
	</td>

	<td class="title">
			<i>Ma come Silvia li riconobbe e vide</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam5011934a&filter=homophonic2">20%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tam5011978a&filter=homophonic">41.6%</a>
	</td>

	<td class="id">
		Tam5011978a
	</td>

	<td class="composer">
		Boschetti
	</td>

	<td class="date">
		1613
	</td>

	<td class="title">
			<i>Non so se il molto amaro</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tam5011978a&filter=homophonic2">8.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tec1089a&filter=homophonic">21.9%</a>
	</td>

	<td class="id">
		Tec1089a
	</td>

	<td class="composer">
		Coma
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Di che cantar degg'io</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tec1089a&filter=homophonic2">18%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tri5016b&filter=homophonic">39.8%</a>
	</td>

	<td class="id">
		Tri5016b
	</td>

	<td class="composer">
		Stivori
	</td>

	<td class="date">
		1590
	</td>

	<td class="title">
			<i>Lasso, dicea, "Perché venisti Amore</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tri5016b&filter=homophonic2">11.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tri5018a&filter=homophonic">38.4%</a>
	</td>

	<td class="id">
		Tri5018a
	</td>

	<td class="composer">
		Felis
	</td>

	<td class="date">
		1591
	</td>

	<td class="title">
			<i>Tu perfido signor, tu disleale</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tri5018a&filter=homophonic2">9.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Trt0506a&filter=homophonic">66.6%</a>
	</td>

	<td class="id">
		Trt0506a
	</td>

	<td class="composer">
		Personè
	</td>

	<td class="date">
		1628
	</td>

	<td class="title">
			<i>Ahi lagrime! ahi dolore</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Trt0506a&filter=homophonic2">14.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg01002a&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Tsg01002a
	</td>

	<td class="composer">
		Bellanda
	</td>

	<td class="date">
		1599
	</td>

	<td class="title">
			<i>O musa, tu che di caduchi allori</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg01002a&filter=homophonic2">36.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg01002b&filter=homophonic">59.4%</a>
	</td>

	<td class="id">
		Tsg01002b
	</td>

	<td class="composer">
		Priuli
	</td>

	<td class="date">
		1604
	</td>

	<td class="title">
			<i>O musa, tu che di caduchi allori</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg01002b&filter=homophonic2">12.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg01003a&filter=homophonic">50.8%</a>
	</td>

	<td class="id">
		Tsg01003a
	</td>

	<td class="composer">
		Priuli
	</td>

	<td class="date">
		1604
	</td>

	<td class="title">
			<i>Sai che là corre il mondo ove più versi</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg01003a&filter=homophonic2">12.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg03008a&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Tsg03008a
	</td>

	<td class="composer">
		Mazzocchi
	</td>

	<td class="date">
		1640
	</td>

	<td class="title">
			<i>Dunque, ove tu signor di mille rivi</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg03008a&filter=homophonic2">0%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg07019b&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Tsg07019b
	</td>

	<td class="composer">
		D'India
	</td>

	<td class="date">
		1609
	</td>

	<td class="title">
			<i>Sovente, allor che su gli estivi ardori</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg07019b&filter=homophonic2">6.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg07020b&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Tsg07020b
	</td>

	<td class="composer">
		D'India
	</td>

	<td class="date">
		1609
	</td>

	<td class="title">
			<i>Indi dicea piangendo: "In voi serbate @SETTINGTITLE" E diceva piangendo: "in voi serbate</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg07020b&filter=homophonic2">0%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg07021a&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Tsg07021a
	</td>

	<td class="composer">
		D'India
	</td>

	<td class="date">
		1609
	</td>

	<td class="title">
			<i>Forse avverrà se 'l ciel benigno ascolta</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg07021a&filter=homophonic2">0%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg12077a&filter=homophonic">69.3%</a>
	</td>

	<td class="id">
		Tsg12077a
	</td>

	<td class="composer">
		Monteverdi
	</td>

	<td class="date">
		1592
	</td>

	<td class="title">
			<i>Vivrò fra i miei tormenti e le mie cure</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg12077a&filter=homophonic2">21.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg12078a&filter=homophonic">41.9%</a>
	</td>

	<td class="id">
		Tsg12078a
	</td>

	<td class="composer">
		Monteverdi
	</td>

	<td class="date">
		1592
	</td>

	<td class="title">
			<i>Ma dove, oh lasso, me! dove restaro</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg12078a&filter=homophonic2">13%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg12079a&filter=homophonic">37.4%</a>
	</td>

	<td class="id">
		Tsg12079a
	</td>

	<td class="composer">
		Monteverdi
	</td>

	<td class="date">
		1592
	</td>

	<td class="title">
			<i>Io verrò là dove sete; e voi</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg12079a&filter=homophonic2">12.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg14001f&filter=homophonic">22%</a>
	</td>

	<td class="id">
		Tsg14001f
	</td>

	<td class="composer">
		Caprioli
	</td>

	<td class="date">
		1602
	</td>

	<td class="title">
			<i>Usciva omai dal molle e fresco grembo</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg14001f&filter=homophonic2">8.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg14062b&filter=homophonic">0%</a>
	</td>

	<td class="id">
		Tsg14062b
	</td>

	<td class="composer">
		Camarella
	</td>

	<td class="date">
		1633
	</td>

	<td class="title">
			<i>O giovinetti mentre aprile e maggio</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg14062b&filter=homophonic2">12.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16012d&filter=homophonic">45.5%</a>
	</td>

	<td class="id">
		Tsg16012d
	</td>

	<td class="composer">
		Asola
	</td>

	<td class="date">
		1588
	</td>

	<td class="title">
			<i>Vezzosi augelli infra le verdi fronde</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16012d&filter=homophonic2">19.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16012e&filter=homophonic">69.6%</a>
	</td>

	<td class="id">
		Tsg16012e
	</td>

	<td class="composer">
		Molinaro
	</td>

	<td class="date">
		1600
	</td>

	<td class="title">
			<i>Vezzosi augelli infra le verdi fronde</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16012e&filter=homophonic2">53%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16013a&filter=homophonic">70%</a>
	</td>

	<td class="id">
		Tsg16013a
	</td>

	<td class="composer">
		Molinaro
	</td>

	<td class="date">
		1600
	</td>

	<td class="title">
			<i>Vola fra gli altri un che le piume ha sparte</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16013a&filter=homophonic2">35.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16014a&filter=homophonic">44%</a>
	</td>

	<td class="id">
		Tsg16014a
	</td>

	<td class="composer">
		Molinaro
	</td>

	<td class="date">
		1600
	</td>

	<td class="title">
			<i>Deh mira, egli cantò, "spuntar la rosa</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16014a&filter=homophonic2">35.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16043b&filter=homophonic">86.6%</a>
	</td>

	<td class="id">
		Tsg16043b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Qual musico gentil prima che chiara</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16043b&filter=homophonic2">36.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16043c&filter=homophonic">65.5%</a>
	</td>

	<td class="id">
		Tsg16043c
	</td>

	<td class="composer">
		Molinaro
	</td>

	<td class="date">
		1600
	</td>

	<td class="title">
			<i>Qual musico gentil prima che chiara</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16043c&filter=homophonic2">31.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16044b&filter=homophonic">61.4%</a>
	</td>

	<td class="id">
		Tsg16044b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Poi cominciò: "Non aspettar ch'io preghi</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16044b&filter=homophonic2">42.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16045b&filter=homophonic">54.8%</a>
	</td>

	<td class="id">
		Tsg16045b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Se m'odii e in ciò diletto alcun tu senti</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16045b&filter=homophonic2">29.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16046b&filter=homophonic">61.6%</a>
	</td>

	<td class="id">
		Tsg16046b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Aggiungi a questo ancor quel ch'a maggiore</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16046b&filter=homophonic2">29.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16047b&filter=homophonic">65%</a>
	</td>

	<td class="id">
		Tsg16047b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Sia questa pur tra le mie frodi, e vaglia</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16047b&filter=homophonic2">37.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16056a&filter=homophonic">46.7%</a>
	</td>

	<td class="id">
		Tsg16056a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Rimanti in pace: i' vado: a te non lice</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16056a&filter=homophonic2">29.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16059a&filter=homophonic">52.9%</a>
	</td>

	<td class="id">
		Tsg16059a
	</td>

	<td class="composer">
		Monteverdi
	</td>

	<td class="date">
		1592
	</td>

	<td class="title">
			<i>Vattene pur crudel con quella pace</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16059a&filter=homophonic2">3.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16059b&filter=homophonic">59.2%</a>
	</td>

	<td class="id">
		Tsg16059b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Vattene pur crudel con quella pace</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16059b&filter=homophonic2">41.1%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16059f&filter=homophonic">41.1%</a>
	</td>

	<td class="id">
		Tsg16059f
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Vattene pur crudel con quella pace</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16059f&filter=homophonic2">16.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16060a&filter=homophonic">54.1%</a>
	</td>

	<td class="id">
		Tsg16060a
	</td>

	<td class="composer">
		Monteverdi
	</td>

	<td class="date">
		1592
	</td>

	<td class="title">
			<i>Là tra 'l sangue e le morti egro giacente</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16060a&filter=homophonic2">23.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16060b&filter=homophonic">57.6%</a>
	</td>

	<td class="id">
		Tsg16060b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Là tra 'l sangue e le morti egro giacente</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16060b&filter=homophonic2">31.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16060h&filter=homophonic">37.7%</a>
	</td>

	<td class="id">
		Tsg16060h
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Là tra 'l sangue e le morti egro giacente</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16060h&filter=homophonic2">8.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16061a&filter=homophonic">36.7%</a>
	</td>

	<td class="id">
		Tsg16061a
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Chiudesti i lumi Armida: il cielo avaro</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16061a&filter=homophonic2">24.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16061f&filter=homophonic">38.9%</a>
	</td>

	<td class="id">
		Tsg16061f
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Chiudesti i lumi Armida: il cielo avaro</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16061f&filter=homophonic2">17.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16062a&filter=homophonic">63.3%</a>
	</td>

	<td class="id">
		Tsg16062a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Or che farà? Dee su l'ignuda arena</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16062a&filter=homophonic2">16%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16063a&filter=homophonic">53.2%</a>
	</td>

	<td class="id">
		Tsg16063a
	</td>

	<td class="composer">
		Monteverdi
	</td>

	<td class="date">
		1592
	</td>

	<td class="title">
			<i>Poi ch'ella in sé tornò, deserto e muto</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16063a&filter=homophonic2">33%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16063c&filter=homophonic">32.8%</a>
	</td>

	<td class="id">
		Tsg16063c
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Poi ch'ella in sé tornò, deserto e muto</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16063c&filter=homophonic2">25%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16064a&filter=homophonic">39.2%</a>
	</td>

	<td class="id">
		Tsg16064a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Che fa più meco il pianto? Altr'arme, altr'arte</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16064a&filter=homophonic2">18.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16065b&filter=homophonic">40.5%</a>
	</td>

	<td class="id">
		Tsg16065b
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Misera Armida, allor dovevi e degno</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16065b&filter=homophonic2">25.4%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg16066a&filter=homophonic">42%</a>
	</td>

	<td class="id">
		Tsg16066a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Questa bellezza mia sarà mercede</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg16066a&filter=homophonic2">16.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg19106b&filter=homophonic">69%</a>
	</td>

	<td class="id">
		Tsg19106b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Misera non credea ch'a gli occhi miei</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg19106b&filter=homophonic2">41.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg19107b&filter=homophonic">68%</a>
	</td>

	<td class="id">
		Tsg19107b
	</td>

	<td class="composer">
		Baccusi
	</td>

	<td class="date">
		1594
	</td>

	<td class="title">
			<i>Ma che? squallido e scuro anco mi piaci</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg19107b&filter=homophonic2">60.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20123a&filter=homophonic">72.4%</a>
	</td>

	<td class="id">
		Tsg20123a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Piacquele assai che 'n quelle valli ombrose</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20123a&filter=homophonic2">25.6%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20124a&filter=homophonic">67.5%</a>
	</td>

	<td class="id">
		Tsg20124a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Ah, ma non fia che fra tant'armi e tante</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20124a&filter=homophonic2">13.9%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20125a&filter=homophonic">61.7%</a>
	</td>

	<td class="id">
		Tsg20125a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Dimostratevi in me, ch'io vi perdono</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20125a&filter=homophonic2">11.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20126a&filter=homophonic">57.8%</a>
	</td>

	<td class="id">
		Tsg20126a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Felice me se nel morir non reco</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20126a&filter=homophonic2">15.5%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20127a&filter=homophonic">58.9%</a>
	</td>

	<td class="id">
		Tsg20127a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Qui tacque: e stabilito il suo pensiero</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20127a&filter=homophonic2">20.3%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20128b&filter=homophonic">54.8%</a>
	</td>

	<td class="id">
		Tsg20128b
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Si volse Armida e 'l rimirò improvviso</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20128b&filter=homophonic2">9.8%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20129a&filter=homophonic">65.7%</a>
	</td>

	<td class="id">
		Tsg20129a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>E 'l bel volto e 'l bel seno a la meschina</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20129a&filter=homophonic2">11.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20130a&filter=homophonic">66.1%</a>
	</td>

	<td class="id">
		Tsg20130a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>E con man languidetta il forte braccio</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20130a&filter=homophonic2">14.7%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20131a&filter=homophonic">57.4%</a>
	</td>

	<td class="id">
		Tsg20131a
	</td>

	<td class="composer">
		Cifra
	</td>

	<td class="date">
		1614
	</td>

	<td class="title">
			<i>O sempre, e quando parti e quando torni</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20131a&filter=homophonic2">10.2%</a>
	</td>
-->

</tr>


<tr class="sortable">

	<td class="score">
		<a target="_blank" href="/work?id=Tsg20134a&filter=homophonic">51.2%</a>
	</td>

	<td class="id">
		Tsg20134a
	</td>

	<td class="composer">
		Eredi
	</td>

	<td class="date">
		1629
	</td>

	<td class="title">
			<i>Così doleasi e con le flebil onde</i> 
	</td>

<!--
	<td class="score2">
		<a target="_blank" href="/work?id=Tsg20134a&filter=homophonic2">24.8%</a>
	</td>
-->

</tr>

</tbody>
</table>
