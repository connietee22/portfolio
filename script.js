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

	// window.onscroll = function toggleSticky() {
	$(window).scroll(function () {
		// const navOffset = $('.navBg').offset().top;
		// let windowScroll = $(document).scrollTop();
		if ($(this).scrollTop() > 1) {
			// if (windowScroll > 0) {
			$('.navBg').addClass('sticky');
		} else {
			$('.navBg').removeClass('sticky');
		}
		console.log(navOffset);
		console.log(windowScroll);
	});
});
