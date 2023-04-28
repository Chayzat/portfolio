const info = document.querySelector('#info')
const links = document.querySelectorAll('.nav-item')
const infoSection = document.querySelector('.info-section')

const linksArr = Array.from(links)

if (links.length) {
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove('active'))
      link.classList.add('active');
    });
  });
}

info.addEventListener('click', () => {
  infoSection.classList.toggle('show')
})
