let swiper = new Swiper('.channel-slider', {
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

let swiper_recommended = new Swiper('.channel-slider-recommended', {
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

let swiper_food_drink = new Swiper('.channel-slider-food-drink', {
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

function swiperLarge() {
let swiper = new Swiper('.channel-slider', {
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

let swiper_recommended = new Swiper('.channel-slider-recommended', {
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

let swiper_food_drink = new Swiper('.channel-slider-food-drink', {
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
  console.log('swiperLarge - done', swiper);
};

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
const ytLogo = document.querySelector('.logo');
const innerSearchLogo = document.querySelector('.icon-search');

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

function swiperSmall() {
    swiper.destroy();
    swiper_recommended.destroy();
    swiper_food_drink.destroy();
  console.log('swiperSmall - done', swiper);
  swiper = null;
  swiper_recommended = null;
  swiper_food_drink = null;
  console.log('variables - null', swiper);
    delete swiper;
    delete swiper_recommended;
  delete swiper_food_drink;
  console.log('variables - delete', swiper);
  
    window.location.reload();
    console.log('reload');
};

////////////////////////////////////////////////////////////////

/* swiperLarge(); */
/* swiperSmall(); */

window.onload = () => {
  console.log('loaded');
  if (document.documentElement.scrollWidth <= 640) {
    swiperSmall();
    break;
  } else {
    swiperLarge();
  };
};

window.onresize = () => {
  console.log('resized');
  if (document.documentElement.scrollWidth <= 640) {
    swiperSmall();
  } else {
    swiperLarge();
  };
};