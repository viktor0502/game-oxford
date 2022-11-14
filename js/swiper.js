const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    765: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1140: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
