const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

function openMenu() {
  menuBtn.classList.add("hidden");
  menu.classList.remove("hidden");
}

function closeMenu() {
  menuBtn.classList.remove("hidden");
  menu.classList.add("hidden");
}
