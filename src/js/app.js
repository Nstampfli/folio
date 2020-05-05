const text = "Welcome to my folio ! ";
let typingDiv = document.querySelector('.intro__typing')
let intro = document.querySelector('.intro')
let homePage = document.querySelector('.homePage')
let index = 0;
let letter = '';

function type() {
    letter = text.slice(0,++index);
    typingDiv.textContent = letter;
    setTimeout(type,100);
};
setTimeout(type,2000)

function visibleTransition() {
    intro.classList.remove("visible");
    homePage.classList.add("visible");
}

setTimeout(visibleTransition,4500)