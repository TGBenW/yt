const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const swiper_recommended = new Swiper('.channel-slider-recommended', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-recommended',
    prevEl: '.channel-button-prev-recommended',
  },
});

const swiper_food_drink = new Swiper('.channel-slider-food-drink', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
    breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-food-drink',
    prevEl: '.channel-button-prev-food-drink',
  },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiper_recommended.destroy();
  swiper_food_drink.destroy();
}