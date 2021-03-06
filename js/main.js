jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

//mainslider3 pagina de silder .html
	$( '.centered3' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider3').height() - $(this).height())/3);
	});

	$(window).resize(function(){
		$( '.centered3' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider3').height() - $(this).height())/2);
		});
	});

	$('.micha').each(function( e ){
		$('this').css('margin-top', ($('hei100')) )

	})
//main-slider3 pagina de pcuevas



	//portfolio
	$(window).load(function(){
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				/*itemSelector : 'li',  !important */  /*Es para que e la seeccion de portafoilio en la contraparte se vea el "ul"*/
				layoutMode : 'fitRows'
			});
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});

	//contact form
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
});
