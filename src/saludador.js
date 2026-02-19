function saludar(nombre, hora, genero) {

  // Saludo según hora
  if (typeof hora === "number") {

    if (hora < 12) {
      if (nombre) {
        if (genero === "M") return "Buenos días Sr. " + nombre;
        if (genero === "F") return "Buenos días Sra. " + nombre;
        return "Buenos días " + nombre;
      }
      return "Buenos días";
    }

    if (hora < 18) {
      if (nombre) {
        if (genero === "M") return "Buenas tardes Sr. " + nombre;
        if (genero === "F") return "Buenas tardes Sra. " + nombre;
        return "Buenas tardes " + nombre;
      }
      return "Buenas tardes";
    }

    // Noche
    if (nombre) {
      if (genero === "M") return "Buenas noches Sr. " + nombre;
      if (genero === "F") return "Buenas noches Sra. " + nombre;
      return "Buenas noches " + nombre;
    }
    return "Buenas noches";
  }

  // Funcionalidad anterior (sin hora)
  if (nombre) {
    if (genero === "M") return "hola Sr. " + nombre;
    if (genero === "F") return "hola Sra. " + nombre;
    return "hola " + nombre;
  }

  return "hola";
}

export default saludar;
