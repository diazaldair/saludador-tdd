function saludar(nombre, hora) {
  // Nueva funcionalidad: saludo según hora (solo mañana por ahora)
  if (typeof hora === "number") {
    if (hora < 12) {
      if (nombre) {
        return "Buenos días " + nombre;
      }
      return "Buenos días";
    }
  }

  // Funcionalidad anterior (iteración 1 y 2)
  if (nombre) {
    return "hola " + nombre;
  }

  return "hola";
}

export default saludar;
