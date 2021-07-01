/* 
  AUTHOR: Anderson Mendes
  LAST DATE: 01/07/2021
*/

/*==== ANIMATE MENU =============================*/

// hidden/show menu on click on the icons
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Close menu void click on navigation link
const links = document.querySelectorAll('nav .menu ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    // remove menu
    nav.classList.remove('show')
  })
}

/*==== SWIPER SLIDE ==============================*/

// Initialize the swiper slide
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  speed: 500,
  mousewheel: true,
  keyBoard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*==== SMOOTHLY REVELATION OF ITEMS ================*/

// Show animated the elements void user o user scrolling the page
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text, 
  #products header, #products .card, 
  #testimonials header, #testimonials .testimonials, 
  #contact .text, contact .links,
  #footer .brand, #footer .social`,
  { interval: 120 }
)

/* ==== SCROLL ==================================*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

// Aply scroll sttings
function changeHeaderEnScroll() {
  // If scroll height is more of header height
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Show the to top icon void a specific height os the scroll bar
const toTopButton = document.querySelector('.to-top')

function backToTop() {
  if (window.scrollY >= 500) {
    toTopButton.classList.add('show')
  } else {
    toTopButton.classList.remove('show')
  }
}

// Actve link on menu at current section
const sections = document.querySelectorAll('main section[id]')

function activeMenuAtCurrentSection() {
  // Set metrics of page for delimite section areas
  const checkpoint = window.pageYOffset + (window.innerHeight / 10) * 5

  for (const section of sections) {
    // Get top height and id of sections
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    // Set checkpoints of sections
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    // if checkpoint is beteween start and end or not
    if (checkpointStart && checkpointEnd) {
      // Add active class
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      // Remove active class
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Change scrolling on the page and invoque functions
window.addEventListener('scroll', function () {
  changeHeaderEnScroll()
  backToTop()
  activeMenuAtCurrentSection()
})
