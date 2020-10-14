const portfolio = {};

portfolio.init = () => {
	$('.hamburger').click(function () {
		// toggle class show on the menu
		$('.menu').addClass('show');
		$('.hamburger').hide();
	});

	$('.hamburgerExit').click(function () {
		// toggle class show on the menu
		$('.menu').removeClass('show');
		$('.hamburger').show();
	});

	$('.menuScreen li').click(function () {
		$('.menu').removeClass('show');
		$('.hamburger').show();
	});

	// ON WINDOW SCROLL---------------------------------------------------------------//
	$(window).scroll(function () {
		// const navOffset = $('.navBg').offset().top;
		// let windowScroll = $(document).scrollTop();
		if ($(this).scrollTop() > 1) {
			// if (windowScroll > 0) {
			$('.navBg').addClass('sticky');
		} else {
			$('.navBg').removeClass('sticky');
		}
	});

	$(window).resize(function () {
		portfolio.resize();
	});
};

portfolio.resize = () => {
	const screenWidth = $('body').width();
	console.log(screenWidth);
	// otherSkills = ;
	if (screenWidth < 769) {
		// console.log('It shrunk');
		$('otherSkills').attr('data-aos', 'slide-up');
	}
};

$(function () {
	AOS.init();
	portfolio.init();
	// TOGGLING HAMBURGER MENU----------------------------------------------------------//

	// $('.hamburger').click(function () {
	// 	// toggle class show on the menu
	// 	$('.menu').addClass('show');
	// });

	// $('.hamburgerExit').click(function () {
	// 	// toggle class show on the menu
	// 	$('.menu').removeClass('show');
	// });

	// $('.menuScreen li').click(function () {
	// 	$('.menu').removeClass('show');
	// });

	// // ON WINDOW SCROLL---------------------------------------------------------------//
	// $(window).scroll(function () {
	// 	// const navOffset = $('.navBg').offset().top;
	// 	// let windowScroll = $(document).scrollTop();
	// 	if ($(this).scrollTop() > 1) {
	// 		// if (windowScroll > 0) {
	// 		$('.navBg').addClass('sticky');
	// 	} else {
	// 		$('.navBg').removeClass('sticky');
	// 	}
	// });

	// $(window).resize(function () {
	// 	resize();
	// });
});
