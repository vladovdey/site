$(window).on('load', function () { // makes sure the whole site is loaded 
	$('#status').fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(350).css({
		'overflow': 'visible'
	});
	$('.header_content__img-on').delay(1000).fadeOut(1500);
	$('.header_content__img-on').delay(1000).fadeIn(1500);
})

$(function () {
	const switcherOn = document.querySelector('.on'),
		switcherOff = document.querySelector('.off'),
		slider = document.querySelector("#toning_range"),
		tonerTruck = document.querySelector(".toner");
	whiteStrip = document.querySelector(".white_strip");

	let sw_off = 1,
		sw_on = 0,
		glass = 0;
	/////
	$("div").on("click", "#callback", function () {
		$(".contact_us").fadeIn(700);
		$("body").css('overflow', 'hidden');
	});
	//open popup form

	/////
	$(".contact_us__body___close > svg").click(function () {
		$(".contact_us").fadeOut(300);
		$("body").css('overflow', 'auto');
	});
	//close popup form

	////
	slider.addEventListener('input', () => {
		let value = (+slider.value) / 100;
		tonerTruck.style.opacity = value;
		whiteStrip.style.width = slider.value * 2.38 + 'px';
	});
	//truck opacity truck

	////
	$(".on").click(function () {
		if (switcherOff.style.opacity == 0) {
			sw_off = 1;
			sw_on = 0;
			glass = 0;
		} else {
			sw_off = 0;
			sw_on = 1;
			glass = 1;
		}
		$(".on").animate({
			opacity: sw_on,
		}, 100);

		$(".off").animate({
			opacity: sw_off
		}, 200);

		$(".header_content__img-on").animate({
			opacity: glass
		}, 700);
	});


	$('.header_content__img-on').click(function () {
		if (switcherOff.style.opacity == 0) {
			sw_off = 1;
			sw_on = 0;
			glass = 0;
		} else {
			sw_off = 0;
			sw_on = 1;
			glass = 1;
		}
		$(".on").animate({
			opacity: sw_on,
		}, 100);

		$(".off").animate({
			opacity: sw_off
		}, 200);

		$(".header_content__img-on").animate({
			opacity: glass
		}, 700);
	});

	//end of glass_switcher_on

	////
	$(".off").click(function () {

		$(".on").animate({
			opacity: 1
		}, 200);

		$(".off").animate({
			opacity: 0
		}, 300);

		$(".header_content__img-on").animate({
			opacity: 1
		}, 1000);

	});
	//end of glass_switcher_on

	$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
		default_offset_pct: 0.5
	});
	$(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
		default_offset_pct: 0.5,
		orientation: 'vertical'
	});
	//before-after block

	///////
	$(".prev").click(function () {
		$("#selected_movie").trigger('pause');
		$("#next_movie").trigger('pause');
	});

	$(".selected").click(function () {
		$("#prev_movie").trigger('pause');
		$("#next_movie").trigger('pause');
	});

	$(".next").click(function () {
		$("#selected_movie").trigger('pause');
		$("#next_movie").trigger('pause');
	});
	//video-slider_settings

	////
	$(".navmenu__menu_items").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
	//scroll function
	

	$(window).on('load', function(){
		var win = $(this);
		if (win.width()<450){
			$('video').attr('width', '300');
			$('.white_strip').css({left: 20});
			$('.vid_next').click();
			$('.vid_prev').click();
		}
	});
	//video-resize

	///form-validate
});

function moveToSelected(element) {

	if (element == "next") {
		var selected = $(".selected").next();
	} else if (element == "prev") {
		var selected = $(".selected").prev();
	} else {
		var selected = element;
	}

	var next = $(selected).next();
	var prev = $(selected).prev();
	var prevSecond = $(prev).prev();
	var nextSecond = $(next).next();

	$(selected).removeClass().addClass("selected");

	$(prev).removeClass().addClass("prev");
	$(next).removeClass().addClass("next");

	$(nextSecond).removeClass().addClass("nextRightSecond");
	$(prevSecond).removeClass().addClass("prevLeftSecond");

	$(nextSecond).nextAll().removeClass().addClass('hideRight');
	$(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

$(document).keydown(function (e) {
	switch (e.which) {
		case 37: // left
			moveToSelected('prev');
			break;

		case 39: // right
			moveToSelected('next');
			break;

		default:
			return;
	}
	e.preventDefault();
});

$('#carousel div').click(function () {
	moveToSelected($(this));
});

$('.vid_prev').click(function () {
	moveToSelected('prev');
	$("#selected_movie").trigger('pause');
	$("#prev_movie").trigger('pause');
	$("#next_movie").trigger('pause');
});

$('.vid_next').click(function () {
	moveToSelected('next');
	$("#selected_movie").trigger('pause');
	$("#prev_movie").trigger('pause');
	$("#next_movie").trigger('pause');
});

$(document).ready(function () {
	$('.about-business_carousel').slick({
		centerMode: true,
		centerPadding: '200px',
		slidesToShow: 3,
		nextArrow: $(".about-business_next"),
		prevArrow: $(".about-business_prev"),
		responsive: [{
				breakpoint: 1200,
				settings: {
					
					centerMode: true,
					centerPadding: '50px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					
					centerMode: true,
					centerPadding: '90px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			}
		]
	});

	$('.examples-slider_carousel').slick({
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 3,
		nextArrow: $(".examples_btn_next"),
		prevArrow: $(".examples_btn_prev"),
		responsive: [{
				breakpoint: 1200,
				settings: {
					
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 1
				}
			},
			{
			
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '1px',
					slidesToShow: 1
				}
			}
		]
	});

});