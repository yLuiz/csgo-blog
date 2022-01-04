const btn_menu = document.getElementById('btn-menu')

function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }

  const nav = document.getElementById('nav')
  nav.classList.toggle('show')
}

btn_menu.addEventListener('click', toggleMenu)

window.addEventListener('click', () => {
  nav.classList.remove('show')
})

btn_menu.addEventListener('click', event => {
  event.stopPropagation()
})
