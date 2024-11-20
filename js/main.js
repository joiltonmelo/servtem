let swiper = new Swiper(".slide-characters", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {

    640: {
      slidesPerView: 2.0,
    },
    768: {
      slidesPerView: 2.0,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1280: {
      slidesPerView: 2.5,
    },

    1536: {
      slidesPerView: 2.5,
    },
  },
});

