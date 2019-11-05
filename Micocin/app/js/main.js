$(function () {

	// Custom JS

	//плавные якоря для перехода внутри сайта
	// $("#menu, #nav").on("click", "a", function (event) {
	// 	//отменяем стандартную обработку нажатия по ссылке
	// 	event.preventDefault();
	// 	//забираем идентификатор бока с атрибута href
	// 	var id = $(this).attr('href'),
	// 		//узнаем высоту от начала страницы до блока на который ссылается якорь
	// 		top = $(id).offset().top;
	// 	//анимируем переход на расстояние - top за 1500 мс

	// 	$('body,html').animate({
	// 		scrollTop: top
	// 	}, 1000);
	// });

	//плавные якоря для перехода по всем страницам
	$('a[href*="#"]').on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		return false;
	});


	//m-menu
	$('.m-menu').on('click', function (e) {
		e.preventDefault();
		$('.m-menu-box').toggleClass('show');
	});

	//slick слайдер
	$('.header__slider').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		fade: true,


		// responsive: [
		// 	{
		// 	  breakpoint: 993,
		// 	  settings: {
		// 		slidesToShow: 2,
		// 		slidesToScroll: 1,
		// 	  }
		// 	},
		// 	 {
		// 		breakpoint: 768,
		// 		settings: {
		// 		  slidesToShow: 1,
		// 		  arrows: false,
		// 		  slidesToScroll: 1,
		// 		}
		// 	 }

		//   ]
	});

	//слайдер секции services
	$('.services__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<i class="fas fa-chevron-left slick-next"></i>',
		prevArrow: '<i class="fas fa-chevron-right slick-prev"></i>',

	});


	//слайдеры секции projects
	$('.slider-title').slick({
		slidesToShow: 5,
		slidesToScroll: 0,
		swipe: false,
		infinite: true,
		arrows: false,
		asNavFor: '.slider-projects',
		centerMode: true,
		focusOnSelect: true
	});

	//выделение выбраного слайда
	$('.slider-title__item').on('click', function () {
		$('.slider-title__item').removeClass('active');
		$(this).addClass('active');
	});

	$('.slider-projects').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider-title',
		fade: true,
		swipe: false,
	});

	//слайдеры секции testimonials
	$('.slider-image').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		// arrows: false,
		asNavFor: '.slider-testi',
		centerMode: true,
		centerPadding: '10px',
		focusOnSelect: true,
		arrows: false,
		//swipe: true,
	});

	$('.slider-testi').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-image',
		swipe: false,
		fade: true,
		nextArrow: '<i class="fas fa-chevron-left slick-next"></i>',
		prevArrow: '<i class="fas fa-chevron-right slick-prev"></i>',

	});

	//модальное окно
	var elements = $('.modal-overlay, .modal');

	$('.modal-btn').click(function () {
		elements.addClass('active');
	});

	$('.close-modal').click(function () {
		elements.removeClass('active');
	});


	//анимация кнопки
	$(".ripple").on("click", function (event) {
		$(this).append("<span class='ripple-effect'>");
		$(this).find(".ripple-effect").css({
			left: event.pageX - $(this).position().left,
			top: event.pageY - $(this).position().top
		}).animate({
			opacity: 0,
		}, 1500, function () {
			$(this).remove();
		});
	});


	//scrollBar
	$('.scrollbar-macosx').scrollbar();

});