window.addEventListener("load", function () {
  const signSwiper = new Swiper(".sign_swiper", {
    direction: "vertical",
    spaceBetween: 30,
    // centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    // // speed: 5000,
  });
});
