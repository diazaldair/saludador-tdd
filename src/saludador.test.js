import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar con hola", () => {
    expect(saludar()).toEqual("hola");
  });

  it("deberia saludar con el nombre", () => {
    expect(saludar("Ana")).toEqual("hola Ana");
  });
  it("deberia saludar segun la hora en la mañana", () => {
  expect(saludar("Ana", 9)).toEqual("Buenos días Ana");
});
it("deberia saludar segun la hora en la tarde", () => {
  expect(saludar("Ana", 15)).toEqual("Buenas tardes Ana");
});
it("deberia saludar segun la hora en la noche", () => {
  expect(saludar("Ana", 22)).toEqual("Buenas noches Ana");
});
it("deberia saludar por genero masculino en la mañana", () => {
  expect(saludar("Juan", 9, "M")).toEqual("Buenos días Sr. Juan");
});

it("deberia saludar por genero femenino en la mañana", () => {
  expect(saludar("Ana", 9, "F")).toEqual("Buenos días Sra. Ana");
});

});
