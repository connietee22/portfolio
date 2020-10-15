const portfolio = {};

//caching selectors
$hamburger = $('.hamburger');
$menu = $('.menu');
$hamburgExit = $('.hamburgerExit');
$navBg = $('.navBg');

portfolio.init = () => {
	$hamburger.click(function () {
		// toggle class show on the menu
		$menu.addClass('show');
		$hamburger.removeClass('display');
	});

	$hamburgExit.click(function () {
		// toggle class show on the menu
		$menu.removeClass('show');
		$hamburger.addClass('display');
	});

	// ON WINDOW SCROLL---------------------------------------------------------------//
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$navBg.addClass('sticky');
		} else {
			$navBg.removeClass('sticky');
		}
	});

	$(window).resize(function () {
		portfolio.resize();
	});
};

portfolio.resize = () => {
	const screenWidth = $('body').width();
	if (screenWidth < 769) {
		$('.menuScreen a').click(function () {
			$menu.removeClass('show');
			$hamburger.removeClass('display');
		});
	}
};

$(function () {
	AOS.init();
	portfolio.init();
});
