$(function () {
	AOS.init();

	$('.hamburger').click(function () {
		// toggle class show on the menu
		$('.menu').addClass('show');
	});

	$('.hamburgerExit').click(function () {
		// toggle class show on the menu
		$('.menu').removeClass('show');
	});

	const navOffset = $('.navBg').offset().top;
	let windowScroll = $(document).scrollTop();

	if (windowScroll >= navOffset) {
		$('.navBg').addClass('sticky');
	} else {
		$('.navBg').removeClass('sticky');
	}
	// console.log(navOffset);
	// console.log(windowScroll);
});
