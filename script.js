let container = document.querySelector(".main-wrapper");
let section = container.querySelectorAll("section");

gsap.registerPlugin(ScrollTrigger);

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=3300",
    },
  })
  .to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth - 95) +
      "px",
    ease: "none",
    duration: 1,
  })
  .to({}, { duration: 1 / (section.length + 1) });

  ScrollTrigger.saveStyles(".section-2, .section-3, .main-wrapper");

