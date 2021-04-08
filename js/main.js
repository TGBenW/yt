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

const swiper_recommended = new Swiper('.channel-slider-recommended', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-recommended',
    prevEl: '.channel-button-prev-recommended',
  },
});

const swiper_food_drink = new Swiper('.channel-slider-food-drink', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-food-drink',
    prevEl: '.channel-button-prev-food-drink',
  },
});