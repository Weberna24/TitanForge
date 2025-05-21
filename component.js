const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const body = document.querySelector('body')



menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    navbarEl.classList.toggle('active');
    body.classList.toggle('active');
})

var swiper = new Swiper("#project-pics", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide:true,
    fade: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
      el: "swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    }
  });
