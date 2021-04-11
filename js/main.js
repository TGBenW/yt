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
const ytLogo = document.querySelector('.logo');
const innerSearchLogo = document.querySelector('.icon-search');

const wrapRow1 = document.querySelector('.wrap-row1');
const wrapRow2 = document.querySelector('.wrap-row2');
const wrapRow3 = document.querySelector('.wrap-row3');

searchBtn.addEventListener('click', () => {
  mobileSearch.classList.add('is-open');
  ytLogo.classList.add('hide');
  searchBtn.classList.add('hide');
});
innerSearchLogo.addEventListener('click', () => {
  mobileSearch.classList.remove('is-open');
  ytLogo.classList.remove('hide');
  searchBtn.classList.remove('hide');
});

/* if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiper_recommended.destroy();
  swiper_food_drink.destroy();
}; */

////////////////////////////////////////////////////////////////////////

window.onresize = function () {
  if (document.documentElement.scrollWidth <= 640) {
    wrapRow1.classList.remove('swiper-wrapper');
    wrapRow2.classList.remove('swiper-wrapper');
    wrapRow3.classList.remove('swiper-wrapper');
  } else {
    wrapRow1.classList.add('swiper-wrapper');
    wrapRow2.classList.add('swiper-wrapper');
    wrapRow3.classList.add('swiper-wrapper');
  }
};