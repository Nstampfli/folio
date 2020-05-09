const $headerNav = document.querySelector(".header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 50) {
    $headerNav.classList.add("header--shadow");
  } else {
    $headerNav.classList.remove("header--shadow");
  }
});
