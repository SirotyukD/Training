$(function () {

	// Custom JS

	//модальное окно
	var elements = $('.modal-overlay, .modal');
	$('.modal-btn').click(function () {
		elements.addClass('active');
	});
	$('.close-modal').click(function () {
		elements.removeClass('active');
	});


	//выбор языка
	$('.header__lang').click(function () {
		$('.dropdown-content').toggleClass('dropdown-content--active');
	});

	//header slider
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		nextArrow: '<img src="img/slider-next.svg" alt="next">',
		prevArrow: '<div class="prev-arrow"></div>'
	});


	//анимация при скролле
	AOS.init({
		// Global settings:
		disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});
	
});