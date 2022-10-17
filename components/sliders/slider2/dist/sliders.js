@@include('libs/swiper-bundle.min.js')


var sliderProjectsClass = 'name-slider';

var mySwiper = new Swiper(document.querySelector(`.${sliderProjectsClass}`), {
	spaceBetween: 150,
	// растояние
	//	slidesPerView: 4,// кол-во слайдов
	slideToClickedSlide: true,
	// loop: true,
	// centeredSlides: true, // ативный слайд по центру
	autoplay: {
		delay: 1000
	},
	speed: 3000,
	navigation: {
		nextEl: `.${sliderProjectsClass}-navigation__button-next`,
		prevEl: `.${sliderProjectsClass}-navigation__button-prev`,
	},
	pagination: {
		type: 'bullets',
		// type: 'fraction',
		el: `.${sliderProjectsClass}-pagination`,
		clickable: true
	},
	breakpoints: {
		200: {
			slidesPerView: 1
		}
	}
});
