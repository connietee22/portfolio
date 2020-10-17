const portfolio = {};
const screenWidth = $('body').width();

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
		if (screenWidth < 769) {
			$hamburger.addClass('display');
		} else {
			// to prevent rogue hamburger appearing when browser refreshed and expanded
			$hamburger.removeClass('display');
		}
	});
};

// collapsing menu when nav link is clicked
portfolio.onDropdownClick = () => {
	if (screenWidth < 769) {
		$('.menuScreen a').click(function () {
			$menu.removeClass('show');
		});
	}
};

// code to detect touch devices to remove the hover state
// courtesy of Blade, Stackoverflow
portfolio.watchForHover = () => {
	// lastTouchTime = will ignore emulated mousemove events fired after touchstart events, which are indistinguishable from real events
	// setting it to 0 will ignore what is fired a few milliseconds after touchstart to filter them out.
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
};

portfolio.toggleBurger = () => {
	if (screenWidth > 769) {
		$hamburger.removeClass('display');
	}
};

// on copy button click, save email to clipboard
$('.contactDetails button').on('click', (e) => {
	// to create a temporary holder to hold the text
	let $temp = $('<input>');
	// append it to the body
	$('body').append($temp);
	// reassign temp to the selected email address
	$temp = $temp.val($('#email').text()).select();
	// copy the selected text to clipboard
	document.execCommand('copy');
	// remove the temporary holder
	$temp.remove();
});

portfolio.init = () => {
	// detecting screen width for burger menu
	portfolio.toggleBurger();
	// showing nav items on button click
	portfolio.burgerDropdown();
	// removing dropdown when the exit button is clicked
	portfolio.removeDropdown();
	// collapsing menu when nav link is clicked
	portfolio.onDropdownClick();
	// Triggering sticky nav on window scroll
	portfolio.triggerNav();
	// to detect touch devices and remove hover
	portfolio.watchForHover();
};

$(function () {
	AOS.init();
	portfolio.init();
});
