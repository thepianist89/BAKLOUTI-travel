// ************Start Hero Swiper Element***********
console.log('Hi from js');

var swiper = new Swiper('.herolinks', {
  spaceBetween: 10,
  slidesPerView: 4,
  direction: 'vertical',
});

var swiper = new Swiper('.heroSwiper', {
  spaceBetween: 10,
  slidesPerView: 1,
  effect: 'fade',
  thumbs: {
    swiper: swiper,
  },
});

// ************End Hero Swiper Element*************
