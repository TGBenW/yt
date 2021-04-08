const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const swiper2 = new Swiper('.channel-slider-recommended', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-recommended',
    prevEl: '.channel-button-prev-recommended',
  },
});
