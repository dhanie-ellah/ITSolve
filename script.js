var navBars = document.querySelectorAll("nav");
var backToTop = document.querySelector(".back-to-top");
var mediaQuery = window.matchMedia("(max-width: 1000px)")
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const links = document.getElementById('links')

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navBars.forEach((navBar) => {
      navBar.style.backgroundColor = "white";
      navBar.style.padding = "25px 75px";
      navBar.style.boxShadow = "1px 1px 50px rgba(0, 0, 0, 0.10)"
    });
    backToTop.style.display = "block";
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
    navBars.forEach(navBar => {
      navBar.style.backgroundColor = 'transparent'
      navBar.style.padding = '25px 125px'
      navBar.style.boxShadow = "0 0 0 transparent"
    })
    backToTop.style.display = "none";
  }
}
hamburger.onclick = () => {
  close.style.display = 'block'
  hamburger.style.display = 'none'
  links.style.display = 'flex'
}
close.onclick = () => {
  close.style.display = 'none'
  hamburger.style.display = 'block'
  links.style.display = 'none'
}