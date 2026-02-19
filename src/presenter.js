import saludar from "./saludador.js";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (prompt("¿Cuál es tu nombre?") || "").trim();
  const horaActual = new Date().getHours();

  div.innerHTML = "<p>" + saludar(nombre, horaActual) + "</p>";
});
