let container = document.querySelector(".main-section");
let section = container.querySelectorAll(".section");

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
})

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
      -(container.scrollWidth - document.documentElement.clientWidth - 20) +
      "px",
    ease: "none",
    duration: 1,
  })

  ScrollTrigger.saveStyles(".about-section, .project-section, .main-section");



