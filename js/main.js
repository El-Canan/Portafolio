const navBoton = document.querySelector(".nav-button");
const navList = document.querySelector(".nav-list");

navBoton.addEventListener("click", () => {
  navList.classList.toggle("list-visible");

  if (navMenu.classList.contains("list-visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
})