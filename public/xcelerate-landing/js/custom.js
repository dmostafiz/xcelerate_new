$(document).ready(function () {


    /* **** Slider ***** */
    var swiper = new Swiper(".main-slider .mySwiper", {
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    /* ***** End Slider **** */

    /* **** Slider ***** */
    var swiper = new Swiper(".product-wrp .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
    /* ***** End Slider **** */

    /* **** Slider ***** */
    var swiper = new Swiper(".testimonial-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 75,
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },

        pagination: {
            el: ".swiper-pagination",
        },
    });
    /* ***** End Slider **** */

});
