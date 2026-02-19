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
});
