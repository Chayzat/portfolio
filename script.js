const info = document.querySelector('#info')
const infoSection = document.querySelector('.info-section')

info.addEventListener('click', () => {
  info.classList.toggle('active')
  infoSection.classList.toggle('show')
})

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  loop: true,
  mousewheel: true,
  keyboard: {
    enabled: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});