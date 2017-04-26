---
layout: main
scripts-local: true
style-local: true
jquery: true
handlebars: true
aton: true
vim:    ts=3
---


<div style="min-width:1121px" id="contents">
	<div style="height:1000px"></div>
</div>


<script>
$(window).scroll(function(){
	// var totalHeight = $(document).height()-$(window).height();
	var totalHeight = 500;
	var opacity = 1-$(window).scrollTop()/totalHeight;
	if (opacity < 0) {
		opacity = 0;
	}
	// console.log(opacity, $(window).scrollTop(), totalHeight);
	$('#logo-footer').css({"opacity": opacity});
});
</script>


<div id="logo-footer">
	{% include logos.html %}
</div>

<style>

#logo-footer {
	width: 1085px;
	margin-left: 30px;
	height: 100px;
	position: fixed;
	bottom: 0;
	background-color: white;
	background-color: white;
	box-shadow: 0px -20px 80px #ffffff;
	
}

</style>


