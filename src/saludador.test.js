import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar con hola", () => {
    expect(saludar()).toEqual("hola");
  });
});
