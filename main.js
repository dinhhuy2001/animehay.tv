const dropDown = document.querySelector(".drop-down-menu");
const openMenu = document.querySelector(".menu-drop");
const loginBtn = document.querySelector(".loginBtn");

function toggleMenu() {
  dropDown.classList.toggle("hide");
}
openMenu.addEventListener("click", toggleMenu);
loginBtn.addEventListener("click", function () {
  window.location.replace("./index.html");
});

