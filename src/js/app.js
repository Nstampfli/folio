const text = "Welcome to my folio ! ";
let typingDiv = document.querySelector('.intro__typing')
let index = 0;
let letter = '';

function type() {
    letter = text.slice(0,++index);
    typingDiv.textContent = letter;
    setTimeout(type,200);
};
setTimeout(type,2000)
