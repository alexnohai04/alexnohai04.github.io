
document.addEventListener("DOMContentLoaded", function() {

  var logo = document.querySelector(".logo");

 
  function handleLogoClick() {
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  logo.addEventListener("click", handleLogoClick);
  
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").slice(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var offset = targetElement.offsetTop - 150;
        window.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      }
    });
  }
  const galleryImages = document.querySelectorAll('.galerie-img');

galleryImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    galleryImages.forEach(img => img.classList.add('dim'));
    image.classList.remove('dim');
  });

  image.addEventListener('mouseleave', () => {
    galleryImages.forEach(img => img.classList.remove('dim'));
  });
});

document.getElementById('randomizeButton').addEventListener('click', randomizeImages);

function randomizeImages() {
  const gallery = document.querySelector('.galerie');
  const images = Array.from(gallery.querySelectorAll('.galerie-img'));
  
  const randomizedImages = shuffleArray(images); 

  gallery.innerHTML = ''; 

  randomizedImages.forEach(image => {
    gallery.appendChild(image); 
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const inputText = document.getElementById('inputText');
const verificaButton = document.getElementById('verificaButton');
const poze = document.querySelectorAll('.joc-img');
const rezultatDiv = document.getElementById('rezultat');
let numarGhicite = 0;
let personajeGhicitie = [];

verificaButton.addEventListener('click', function() {
  const nume = inputText.value.trim().toLowerCase();
  let gasit = false;

  poze.forEach(function(poza) {
    const personaj = poza.dataset.personaj.toLowerCase();

    if (personaj === nume && !personajeGhicitie.includes(personaj)) {
      poza.classList.add('reveal');
      gasit = true;
      numarGhicite++;
      personajeGhicitie.push(personaj);
    } 
  });

  if (gasit) {
    rezultatDiv.textContent = `Ai ghicit ${numarGhicite}/5 personaje`;
  } else {
    alert('Numele introdus nu aparține setului de personaje principale.');
  }
  if(numarGhicite == 5){
  rezultatDiv.textContent = `Felicitari! Ai ghicit toate personajele.`;
}
});

function openImage(url) {
 
  window.open(url);
}


var images = document.querySelectorAll('.galerie-img');

for (var i = 0; i < images.length; i++) {
  var image = images[i];
  

  image.addEventListener('click', function() {
    openImage(this.src);
  });
}




});

