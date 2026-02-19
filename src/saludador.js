function saludar(nombre, hora) {
  // Saludo según hora
  if (typeof hora === "number") {
    if (hora < 12) {
      if (nombre) return "Buenos días " + nombre;
      return "Buenos días";
    }

    if (hora < 18) {
      if (nombre) return "Buenas tardes " + nombre;
      return "Buenas tardes";
    }

    // Noche (>= 18)
    if (nombre) return "Buenas noches " + nombre;
    return "Buenas noches";
  }

  // Funcionalidad anterior
  if (nombre) {
    return "hola " + nombre;
  }
  return "hola";
}

export default saludar;
