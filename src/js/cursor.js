document.onmousemove = animateCircles;

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circleCursor");
  document.body.appendChild(circle);
  setInterval(() => {
    circle.remove();
  }, 500);
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + window.scrollY + 'px';

  circle.style.transition = "all 0.5s linear 0s";
  circle.style.left = circle.offsetLeft - 30 + "px";
  circle.style.top = circle.offsetTop - 30 + "px";
  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
}
