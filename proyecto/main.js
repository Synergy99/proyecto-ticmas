const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const botonDia = document.querySelector(".claro");
const botonNoche = document.querySelector(".noche");
const body = document.body;

botonDia.addEventListener("click", () => {
  body.classList.remove("oscuro");
});

botonNoche.addEventListener("click", () => {
  body.classList.add("oscuro");
});
