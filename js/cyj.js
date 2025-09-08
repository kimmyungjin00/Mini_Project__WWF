// ------- Osmo [https://osmo.supply/] ------- //

window.addEventListener("load", () => {
  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  // Parallax Layers
  document.querySelectorAll("[data-parallax-layers]").forEach((triggerElement) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
      },
    });
    const layers = [
      { layer: "1", yPercent: 70 },
      { layer: "2", yPercent: -80 },
    ];
    layers.forEach((layerObj, idx) => {
      tl.to(
        triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
        {
          yPercent: layerObj.yPercent,
          ease: "none",
        },
        idx === 0 ? undefined : "<"
      );
    });
  });
  /* Lenis */
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // 헤더메뉴 스크롤했을때 나오게하기
  const header = document.querySelector(".header");
  const changePoint = 3240;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= changePoint) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});
