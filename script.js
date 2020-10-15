const portfolio = {};

//caching selectors
$hamburger = $('.hamburger');
$menu = $('.menu');
$hamburgExit = $('.hamburgerExit');
$navBg = $('.navBg');

// triggering the sticky nav on window scroll
portfolio.triggerNav = () => {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$navBg.addClass('sticky');
		} else {
			$navBg.removeClass('sticky');
		}
	});
};

// showing nav items on hamburger button click
portfolio.burgerDropdown = () => {
	$hamburger.click(function () {
		// toggle class show on the menu
		$menu.addClass('show');
		$hamburger.removeClass('display');
	});
};

// removing dropdown when the exit button is clicked
portfolio.removeDropdown = () => {
	$hamburgExit.click(function () {
		// toggle class show on the menu
		$menu.removeClass('show');
		$hamburger.addClass('display');
	});
};

// collapsing menu when nav link is clicked
portfolio.onDropdownClick = () => {
	const screenWidth = $('body').width();
	if (screenWidth < 769) {
		$('.menuScreen a').click(function () {
			$menu.removeClass('show');
		});
	}
};

function watchForHover() {
	// lastTouchTime is used for ignoring emulated mousemove events
	// that are fired after touchstart events. Since they're
	// indistinguishable from real events, we use the fact that they're
	// fired a few milliseconds after touchstart to filter them.
	let lastTouchTime = 0;

	function enableHover() {
		if (new Date() - lastTouchTime < 500) return;
		document.body.classList.add('hasHover');
	}

	function disableHover() {
		document.body.classList.remove('hasHover');
	}

	function updateLastTouchTime() {
		lastTouchTime = new Date();
	}

	document.addEventListener('touchstart', updateLastTouchTime, true);
	document.addEventListener('touchstart', disableHover, true);
	document.addEventListener('mousemove', enableHover, true);

	enableHover();
}

// portfolio.touchDevice = () => {
// 	function is_touch_device() {
// 		return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
// 	}
// };

portfolio.init = () => {
	// showing nav items on button click
	portfolio.burgerDropdown();
	// removing dropdown when the exit button is clicked
	portfolio.removeDropdown();
	// collapsing menu when nav link is clicked
	portfolio.onDropdownClick();
	// Triggering sticky nav on window scroll
	portfolio.triggerNav();

	portfolio.watchForHover();

	// detecting touch device
	// if (portfolio.touchDevice()) {
	// 	$('.overlay').addClass('hidden');
	// }
};

$(function () {
	AOS.init();
	portfolio.init();
});
