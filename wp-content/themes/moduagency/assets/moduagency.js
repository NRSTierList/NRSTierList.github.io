// custom js file



"use strict";




// DOM ready function
jQuery(document).on('ready', function(){
	(function($){
		
		
		// toggle menu for mobile
		  if($('.main-menu').length) {
			
			$('.main-menu nav ul li.dropdown-holder').append(function () {
			  return '<i class="fa fa-bars" aria-hidden="true"></i>';
			});
			$('.main-menu nav ul li.dropdown-holder .fa').on('click', function () {
			  $(this).parent('li').children('ul').slideToggle();
			}); 
		  }
		  
		  
		// scroll-top 
		if ($('.scroll-top').length) {
			//Check to see if the window is top if not then display button
			$(window).on('scroll', function (){
			  if ($(this).scrollTop() > 200) {
				$('.scroll-top').fadeIn();
			  } else {
				$('.scroll-top').fadeOut();
			  }
			});
			
			//Click event to scroll to top
			$('.scroll-top').on('click', function() {
			  $('html, body').animate({scrollTop : 0},1500);
			  return false;
			});
		}
		
		/* -- Client Section */
	if( $(".owlGallery").length ) {
		$(".owlGallery").owlCarousel({
			navText: [ '<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-left"></i>' ],
			stagePadding: 0,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000,
			margin: 10,
			nav: true,
			dots: false,
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	}
	/* -- ProductCarousel  */
	if( $(".productCarousel ul").length ) {
		$(".productCarousel ul").owlCarousel({
			navText: false,
			stagePadding: 0,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000,
			margin: 30,
			nav: true,
			dots: false,
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	}
	if( $('.form-group').length ){
		$( 'body' ).on( 'click', '.form-group input,.form-group textarea', function() {
			$('div.form-group').removeClass('active');
			$(this).parents('div.form-group').addClass('active');
		} );
	}
	
	/* -- Search Box Show */
  	
	
	  if($("#search-button").length) {
		$("#search-button").on('click', function(){
		  $("#searchWrapper").addClass('show-box');
		});
		$("#close-button").on('click', function() {
		  $("#searchWrapper").removeClass('show-box');
		});
	  }
	
	/* -- image-popup */
	if( $('.image-popup').length ){
	
		 $('.image-popup').magnificPopup({
			closeBtnInside : true,
			type           : 'image',
			mainClass      : 'mfp-with-zoom'
		});
	}
	
	/* ============== Quantity buttons ============== */
		
			jQuery( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append( '<button type="button" class="plus"><i class="fa fa-plus" aria-hidden="true"></i></button>' ).prepend( '<button type="button" class="minus"><i class="fa fa-minus" aria-hidden="true"></i></button>' );
		
			// Target quantity inputs on product pages
			jQuery( 'input.qty:not(.product-quantity input.qty)' ).each( function() {
				var min = parseFloat( jQuery( this ).attr( 'min' ) );
		
				if ( min && min > 0 && parseFloat( jQuery( this ).val() ) < min ) {
					jQuery( this ).val( min );
				}
			});
		
			jQuery( document ).on( 'click', '.plus, .minus', function() {
		
				// Get values
				var $qty        = jQuery( this ).closest( '.quantity' ).find( '.qty' ),
					currentVal  = parseFloat( $qty.val() ),
					max         = parseFloat( $qty.attr( 'max' ) ),
					min         = parseFloat( $qty.attr( 'min' ) ),
					step        = $qty.attr( 'step' );
		
				// Format values
				if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
				if ( max === '' || max === 'NaN' ) max = '';
				if ( min === '' || min === 'NaN' ) min = 0;
				if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;
		
				// Change the value
				if ( jQuery( this ).is( '.plus' ) ) {
		
					if ( max && ( max == currentVal || currentVal > max ) ) {
						$qty.val( max );
					} else {
						$qty.val( currentVal + parseFloat( step ) );
					}
		
				} else {
		
					if ( min && ( min == currentVal || currentVal < min ) ) {
						$qty.val( min );
					} else if ( currentVal > 0 ) {
						$qty.val( currentVal - parseFloat( step ) );
					}
		
				}
		
				// Trigger change event
				$qty.trigger( 'change' );
			});
	
	})(jQuery);
});

// scroll header
function stickyHeader () {
  
}

// Window scroll function
jQuery(window).on('scroll', function(){
	(function($){
		var sticky = $('.theme-main-menu'),
			  scroll = $(window).scrollTop();
		  if (sticky.length) {
			if (scroll >= 190) sticky.addClass('fixed');
			else sticky.removeClass('fixed');
			
		  };
	})(jQuery);
});


