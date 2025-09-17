window.addEventListener("load", function () {
  // 지구의 목소리
  let earthsVoiceSwiper = document.querySelectorAll(".earths_voice_swiper_box");

  earthsVoiceSwiper.forEach((el) => {
    el.onclick = () => {
      earthsVoiceSwiper.forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
    };
  });

  // 지구수비대
  var swiper = new Swiper(".earths_protector_swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, // ✅ 가운데 정렬
    slidesPerView: 2, // ✅ 3장만 보이게
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2.5,
      slideShadows: false,
    },
    loop: true, // 무한 반복
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 지구수비대 모바일 (한장만 보이도록)
  var swiperMo = new Swiper(".earths_protector_swiper_mo", {
    grabCursor: true,
    centeredSlides: true, // ✅ 가운데 정렬
    slidesPerView: 1, // ✅ 3장만 보이게
    spaceBetween: 20,
    loop: true, // 무한 반복
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

    // 지구수비대 링크 이동
  const eventLink = this.document.querySelector(".event_link");
  eventLink.addEventListener("click", () => {
    this.window.location.href = "event.html";
  });
  const gameLink = this.document.querySelector(".game_link");
  gameLink.addEventListener("click", () => {
    this.window.location.href = "https://www.beesurvival.co.kr/";
  });
});
