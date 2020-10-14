const portfolio = {};

portfolio.init = () => {
	$('.hamburger').click(function () {
		// toggle class show on the menu
		$('.menu').addClass('show');
		// $('.hamburger').hide();
		$('.hamburger').removeClass('display');
	});

	$('.hamburgerExit').click(function () {
		// toggle class show on the menu
		$('.menu').removeClass('show');
		// $('.hamburger').show();
		$('.hamburger').addClass('display');
	});

	// $('.menuScreen li').click(function () {
	//     $('.menu').removeClass('show');
	//     $('.hamburger').show();
	// });

	// ON WINDOW SCROLL---------------------------------------------------------------//
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
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
	if (screenWidth < 769) {
		$('.menuScreen a').click(function () {
			$('.menu').removeClass('show');
			$('.hamburger').removeClass('display');
		});
	}
};

$(function () {
	AOS.init();
	portfolio.init();
});
