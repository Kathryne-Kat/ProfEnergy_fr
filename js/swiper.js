const swiper1 = new Swiper(".swiper-hero", {
    loop: true,
    rewind: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "1",
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next-hero",
    prevEl: ".swiper-button-prev-hero",
    },
});

const swiper2 = new Swiper(".swiper-serv", {
  loop: true,
   rewind: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
//   navigation: {
//     nextEl: ".sw-button-next",
//     prevEl: ".sw-button-prev",
//     },
    pagination: {
        el: '.swiper-pagination-serv',
        clickable:true,
  },
});

const swiper3 = new Swiper(".swiper-rev", {
    loop: true,
    rewind: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".swr-button-next",
    prevEl: ".swr-button-prev",
    },
    pagination: {
        el: '.swiper-pagination-rev',
        clickable:true,
  },
});

const swiper4 = new Swiper(".swiper-p-about", {
    loop: true,
    rewind: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
    pagination: {
        el: '.swiper-pagination-about',
        clickable:true,
  },
});

const swiper5 = new Swiper(".swiper-achiev", {
    loop: true,
    rewind: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
    pagination: {
        el: '.swiper-pagination-achiev',
        clickable:true,
  },
});

const swiper6 = new Swiper(".swiper-serv-p", {
    loop: true,
    rewind: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "1",
  spaceBetween: 20,
  
    pagination: {
        el: '.swiper-pagination-serv-p',
        clickable:true,
  },
});

const swiper7 = new Swiper(".swiper-serv-p-ach", {
    loop: true,
    rewind: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: "1",
  spaceBetween: 20,
  
    pagination: {
        el: '.swiper-pagination-serv-p-ach',
        clickable:true,
  },
});