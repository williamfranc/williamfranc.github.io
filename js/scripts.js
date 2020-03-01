function verticalAlign (one, two) {

    var top = $(one).height() / 2    -    $(two).height() / 2 ;
	$(two).css('padding-top', top + 'px');

    
}




$(document).ready(function () {



$(window).resize(function(){

verticalAlign(".front", "h1");
verticalAlign(".skills div", "article");
verticalAlign(".projets div", "article");
verticalAlign("footer", "footer p");

});



/* Home Animation */

$('.logo').addClass('animated bounceInLeft');  
$('menu').addClass('animated bounceInRight');  
$('.front h1').hide(); 


$(window).load(function () {
		
	//Align
	verticalAlign(".front", "h1");
	verticalAlign(".skills div", "article");
	verticalAlign(".projets div", "article");
	verticalAlign("footer", "footer p");
	
	//FRONT
	$('.front h1').show().addClass('animated bounceInLeft');

});



		
/* Scroll Animation */

$(".dev, .ui, .id").hide();

$(window).scroll(function(){

	var x = $(window).height();
	var y = $(window).scrollTop();


	if    ( y >= x )      { $(".dev").show().addClass('animated bounceInLeft'); }
	if    ( y >= 2 * x )  { $(".ui").show().addClass('animated bounceInLeft'); }
	if    ( y >= 3 * x )  { $(".id").show().addClass('animated bounceInLeft'); }
	
	
	
	$.magneticScroll({
				"selector": ".magnetic",
				"easing": "swing",
				"speed": 500,
				"timeout": 600
	});

});

$("menu a").hover(
	function(){ $(".underline").addClass("was").removeClass("underline"); $(this).addClass("underline");  },
	function(){ $(this).removeClass("underline"); $(".was").addClass("underline"); }
);






});




