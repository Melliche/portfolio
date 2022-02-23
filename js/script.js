
//permet de mettre un background blue avec faible opacité sur le header quand
//on scroll de 100 px
let navbar = document.querySelector('header')

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

//modifie les visuels des différents jeux

function cookieclicker() {
  let cookietitle = "Cookie Clicker";
  let cookietext = "Voici le jeu cookie clicker";
  document.getElementById('h2-title').innerHTML = cookietitle;
  document.getElementById('p-text').innerHTML = cookietext;
  document.getElementById("img-project").src = "images/cookieclicker.png";
  document.getElementById("a-jeux-button").href = "cookieclicker/index.html";
}

function catchjarjar() {
  let catchtitle = "Catch JarJar";
  let catchtext = "Voici le jeu Catch JarJar";
  document.getElementById('h2-title').innerHTML = catchtitle;
  document.getElementById('p-text').innerHTML = catchtext;
  document.getElementById("img-project").src = "images/catch.png";
  document.getElementById("a-jeux-button").href = "catch/index.html";
}

function loto() {
  let lototitle = "Loto";
  let lototext = "Voici le jeu Loto";
  document.getElementById('h2-title').innerHTML = lototitle;
  document.getElementById('p-text').innerHTML = lototext;
  document.getElementById("img-project").src = "images/loto.png";
  document.getElementById("a-jeux-button").href = "loto/index.html";
}

