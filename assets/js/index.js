import { formulario } from "./formulario.js";
import { listado } from "./listado.js";

const main = (() => {
  return {
    iniciarPrograma: async () => {
      const datosAnimales = await fetch("../../animales.json").then(response => response.json());
      formulario.escuchar(datosAnimales, (animal) => {
        listado.agregarAnimal(animal);
      });
    }
  }
})();

$(document).ready(function () {
  main.iniciarPrograma();  
});