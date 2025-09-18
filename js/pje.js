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
  // fixed 버튼
  const fixedBtn = this.document.querySelector(".fixed_btn");
  const goTopBtn = this.document.querySelector(".go_top_btn");
  this.window.addEventListener("scroll", () => {
    if (this.document.documentElement.scrollTop > 1845) {
      fixedBtn.classList.add("active");
    } else {
      fixedBtn.classList.remove("active");
    }
  });
  goTopBtn.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 서명하기
  const signInput = this.document.querySelector(".sign_input > input");
  const signBtn = this.document.querySelector(".sign_input > button");
  signBtn.addEventListener("click", () => {
    if (!signInput.value == "") {
      alert("서명 참여 완료🌏");
      this.window.location = "campaign.html";
      signInput.value = "";
    }
  });
});
