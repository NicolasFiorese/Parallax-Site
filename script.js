let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let montanha = document.getElementById('montanha')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let lobo = document.getElementById('lobo')
let header = document.getElementById('header')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  stars.style.left = value + 'px'
  moon.style.top = value * 1.05 + 'px'
  montanha.style.top = value * 0.5 + 'px'
  lobo.style.top = value * 0 + 'px'
  text.style.marginRight = value * 4 + 'px'
  text.style.marginTop = value * 1.5 + 'px'
  btn.style.marginTop = value * 0.5 + 'px'
})
var audio = document.getElementById('audioLobo')
audio.volume = 0.2
