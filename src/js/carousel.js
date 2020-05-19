const $carouElement = document.querySelectorAll('.work__carouselElement');
const $carouElements = document.querySelector('.work__carouselElements');
const $next = document.querySelector('.work__nextArrow');
const $prev = document.querySelector('.work__prevArrow');

let carouWidth = $carouElements.offsetWidth;
let elementWidth = carouWidth / $carouElement.length;
let maxTranslate = carouWidth - elementWidth;
let shift = 0;

$next.addEventListener('click', function() {
  carouselFunction(1);
});

$prev.addEventListener('click', function() {
  carouselFunction(-1);
});

function carouselFunction(coeff) {
  shift += elementWidth  * coeff;
  if (shift >= maxTranslate) {
    shift = maxTranslate;
    $next.style.opacity=0.3;
  } else if (shift <= 0) {
    shift = 0;
    $prev.style.opacity=0.3;
  }
  else{
    $prev.style.opacity=1;
    $next.style.opacity=1;
  }
  $carouElements.style.transform = 'translateX(-' + shift + 'px)';
}