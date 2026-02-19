function saludar(nombre, hora, genero, edad) {
  // 1) determinar saludo base según hora
  let saludo = "hola";

  if (typeof hora === "number") {
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 18) saludo = "Buenas tardes";
    else saludo = "Buenas noches";
  }

  // 2) titulo solo si edad > 30
  const usaTitulo = typeof edad === "number" && edad > 30;

  // 3) armar mensaje
  if (nombre) {
    if (usaTitulo && genero === "M") return saludo + " Sr. " + nombre;
    if (usaTitulo && genero === "F") return saludo + " Sra. " + nombre;
    return saludo + " " + nombre;
  }

  return saludo;
}

export default saludar;
