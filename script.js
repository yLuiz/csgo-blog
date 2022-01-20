const btn_menu = document.getElementById('btn-menu')
const nav = document.getElementById('nav')

function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }

  nav.classList.toggle('show')
}

btn_menu.addEventListener('click', toggleMenu)

window.addEventListener('click', () => {
  nav.classList.remove('show')
})

btn_menu.addEventListener('click', event => {
  event.stopPropagation()
})

var lastScrollTop = 0
window.addEventListener('scroll', () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop) {
    nav.style.top = '-60px'

    nav.style.opacity = '0%'
  } else {
    nav.style.top = '10px'

    nav.style.opacity = '100%'
  }
  lastScrollTop = scrollTop
})
