import { Aguila } from "./animales/aguila.js";
import { Leon } from "./animales/leon.js";
import { Lobo } from "./animales/lobo.js";
import { Oso } from "./animales/oso.js";
import { Serpiente } from "./animales/serpiente.js";

export const formulario = (() => {
  let datosAnimales;
  let retornarAnimal;

  function validarFormulario(nombre, edad, comentarios) {
    if (nombre == null) {
      return false;
    } else if (edad == null) {
      return false;
    } else if (comentarios == "") {
      return false;
    } else {
      return true;
    }
  }

  function crearAnimal(nombre, edad, comentarios) {
    let datos = datosAnimales.find(animal => {
      return animal.name == nombre;
    });
    switch (datos.name) {
      case "Leon":
        return new Leon(nombre, edad, datos.imagen, comentarios, datos.sonido);
      case "Lobo":
        return new Lobo(nombre, edad, datos.imagen, comentarios, datos.sonido);
      case "Oso":
        return new Oso(nombre, edad, datos.imagen, comentarios, datos.sonido);
      case "Serpiente":
        return new Serpiente(nombre, edad, datos.imagen, comentarios, datos.sonido);
      case "Aguila":
        return new Aguila(nombre, edad, datos.imagen, comentarios, datos.sonido);
    }
    
  }

  function comenzarAEscuchar() {
    $("#btnRegistrar").click(function (e) { 
      e.preventDefault();
      let nombre = $("#animal").val();
      let edad = $("#edad").val();
      let comentarios = $("#comentarios").val();
  
      if (validarFormulario(nombre, edad, comentarios)) {
        retornarAnimal(crearAnimal(nombre, edad, comentarios));
      } else {
        alert("Debes ingresar todos los datos del animal");
      }
    });
  
    $("#animal").change(function (e) { 
      e.preventDefault();
      const nombre = $(this).val();
      const animal = datosAnimales.find(animal => {
        return animal.name == nombre;
      });
      $("#preview").css("background-image", `url("/assets/imgs/${animal.imagen}")`);
    });
  }

  return {
    escuchar: (datos, callback) => {
      datosAnimales = datos.animales;
      retornarAnimal = callback;
      comenzarAEscuchar();
    }
  }
})();