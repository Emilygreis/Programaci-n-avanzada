import { formulario } from "./formulario.js";
import { listado } from "./listado.js";

const main = (() => {
  return {
    iniciarPrograma: async () => {
      try {
        const datosAnimales = await fetch(`${location.origin}/animales.json`).then(response => response.json());
        formulario.escuchar(datosAnimales, (animal) => {
          listado.agregarAnimal(animal);
        });
      } catch (e) {
        alert('Ocurrió un error al intenta obtener los animales')
      }
    }
  }
})();

$(document).ready(function () {
  main.iniciarPrograma();  
});