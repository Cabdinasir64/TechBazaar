var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.95,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});