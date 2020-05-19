const text = "Welcome to my folio ! ";
const typingDiv = document.querySelector(".intro__typing");
const intro = document.querySelector(".intro");
const homePage = document.querySelector(".homePage");
let index = 0;
let letter = "";

function type() {
  letter = text.slice(0, ++index);
  typingDiv.textContent = letter;
  setTimeout(type, 100);
}
setTimeout(type, 2000);

function visibleTransition() {
  intro.classList.remove("visible");
  homePage.classList.add("visible");
}
setTimeout(visibleTransition, 4500);

// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", e => {
//   cursor.setAttribute(
//     "style",
//     "top: " + e.pageY + "px; left: " + e.pageX + "px;"
//   );
// });
// document.onmousemove = animateCircles;

// function animateCircles(event) {
//   var circle = document.createElement("div");
//   circle.setAttribute("class", "circleCursor");
//   document.body.appendChild(circle);
//   setInterval(() => {
//     document.body.removeChild(circle);
//   }, 500);
//   circle.style.left = event.clientX + "px";
//   circle.style.top = event.clientY + "px";

//   circle.style.transition = "all 0.5s linear 0s";
//   circle.style.left = circle.offsetLeft - 30 + "px";
//   circle.style.top = circle.offsetTop - 30 + "px";
//   circle.style.width = "50px";
//   circle.style.height = "50px";
//   circle.style.borderWidth = "5px";
//   circle.style.opacity = 0;
// }
