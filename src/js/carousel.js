const $carouElement = document.querySelectorAll('.work__carouselElement');
const $carouElements = document.querySelector('.work__carouselElements');
const $next = document.querySelector('.work__nextArrow');
const $prev = document.querySelector('.work__prevArrow');
const $carouPoint = document.querySelectorAll('.work__carouPoint')

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

for (let i = 0; i < $carouPoint.length; i++) {
  $carouPoint[i].addEventListener('click', function () {
    let index  = shift/elementWidth;
    let indexMoove = i - index;
    carouselFunction(indexMoove);
  })
}

function carouselFunction(coeff) {
  shift += elementWidth  * coeff;
  carouPointFunction() 
  carouConditionFunction()
  $carouElements.style.transform = 'translateX(-' + shift + 'px)';  
}


function carouPointFunction() {
  let index  = shift/elementWidth;
  let indexMax = maxTranslate/elementWidth
  $carouPoint.forEach(point => {
    point.classList.remove('activate')
  });
  if(index >= 0 && index <= indexMax){
  $carouPoint[index].classList.add('activate')
  }
}


function carouConditionFunction() {
  if (shift >= maxTranslate) {
    shift = maxTranslate;
    $next.style.visibility='hidden';
    $prev.style.visibility='visible';
  } else if (shift <= 0) {
    shift = 0;
    $prev.style.visibility='hidden';
    $next.style.visibility='visible';
  }
  else{
    $prev.style.visibility='visible';
    $next.style.visibility='visible';
  }
}
