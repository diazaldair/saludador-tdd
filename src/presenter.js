import saludar from "./saludador.js";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = (prompt("¿Cuál es tu nombre?") || "").trim();
  const genero = (prompt("Género (M/F):") || "").trim().toUpperCase();
  const edadTexto = (prompt("¿Cuántos años tienes?") || "").trim();

  const edad = Number.parseInt(edadTexto);
  const edadFinal = Number.isNaN(edad) ? undefined : edad;

  const horaActual = new Date().getHours();

  div.innerHTML = "<p>" + saludar(nombre, horaActual, genero, edadFinal) + "</p>";
});
