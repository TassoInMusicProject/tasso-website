import * as Handlebars from 'handlebars';

let reading_tpl = `
{{#each .}}
<div>
	<p><a href="#/source/{{this.source}}">{{this.source}}</a></p>
	{{#if this.agrees}}<p>(<span class="agrees">agrees with displayed</span>)</p>{{/if}}
	{{#if this.agreeing}}(agrees with
		{{#each this.agreeing}}{{this}}{{/each}})
	{{/if}}
	<p class="variant_text">{{this.text}}</p>
	<hr/>
</div>
{{/each}}`

export default Handlebars.compile(reading_tpl);