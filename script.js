const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

const navItems = [nav1, nav2, nav3, nav4, nav5]

// Control Navigation Animation

const navAnimation = (direction1, direction2) => {
  navItems.forEach((el, i) => {
    el.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    )
  })
}

const toggleNav = () => {
  menuBars.classList.toggle('change')

  overlay.classList.toggle('overlay-active')
  if (overlay.classList.contains('overlay-active')) {
    // Animate in overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')

    // Animate in - nav items
    navAnimation('out', 'in')
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
    // Animate Out
    navAnimation('in', 'out')
  }
}

// Event Listeners

menuBars.addEventListener('click', toggleNav)
navItems.forEach((el) => {
  el.addEventListener('click', toggleNav)
})
