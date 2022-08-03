const dropDown = document.querySelector(".drop-down-menu");
const openMenu = document.querySelector(".menu-drop");

function toggleDrop() {
  dropDown.classList.toggle("hide");
}

openMenu.addEventListener("click", toggleDrop);
