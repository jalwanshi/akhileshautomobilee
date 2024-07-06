// JavaScript Document

(function($) {
    "use strict";

	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	
		//navigation Scroll 300px
	$(window).on('scroll', function() {

	var b = $(window).scrollTop();
		
	if( b > 350 ){		
			$(".sticky-navigation").addClass("fixed-top");
		} else {
			$(".sticky-navigation").removeClass("fixed-top");
		}				
		
	});
	
	//Saying page loaded
	$(window).on("load",function(){
		$("body").addClass("loaded");
		$(".preloader").html("");
		$(".preloader").css("display", "none");
	 });

	//Display Scroll Btn on 1000px
	$(window).on("scroll",function() { 
		if($(this).scrollTop() > 1000) { 
			$("#top").fadeIn();
		} else { 
			$("#top").fadeOut();
		}
	});
    //Slick Slider Starts Here
	$('.left').slick({
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		arrows: false,
		variableWidth: true,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  variableWidth: true,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	});

    $('.customer-logos').slick({
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 6,
		variableWidth: true,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 5,
			  slidesToScroll: 1,
			  variableWidth: true,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	});

	//scroll effect
	$("#top").on("click",function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});        

	//Moving Top 
	$("#top").on("click",function (event) {
		event.stopPropagation();                
		var idTo = $(this).attr("data-atr");                
		var Position = $("[id='" + idTo + "']").offset();
		$("html, body").animate({ scrollTop: Position }, "slow");
		return false;
	});
	
})(jQuery); //jQuery main function ends strict Mode on