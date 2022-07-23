var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
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
        320: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
      //   900: {
      //     slidesPerView: 4,
      // },
    },
  });


/* <!--     
*************************************************************************************************************************************
#################################### Frequently Asked Questions Section #################################################################################
**************************************************************************************************************************************** --> */

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})





