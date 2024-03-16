import { modal } from "./modal.js";

export const listado = (() => {
  const listTag = $('<div class="row">');
  $("#Animales").append(listTag);

  function reproducirSonido(animal) {
    switch (animal.Nombre) {
      case "Leon":
        animal.Rugir();
        break;
      case "Lobo":
        animal.Aullar();
        break;
      case "Oso":
        animal.Grunir();
        break;
      case "Serpiente":
        animal.Sisear();
        break;
      case "Aguila":
        animal.Chillar();
        break;
    }
  }

  function agregarTagAnimal(animal) {
    const col = $('<div class="col-4 mb-4 d-flex align-items-stretch">')
    const cardAnimal = $('<div class="card text-white bg-secondary" style="width: 100%;">');
    const cardBody = $('<div class="card-body">');
    const img = $(`<img class="card-img" src ="assets/imgs/${animal.Img}" >`);
    cardBody.click(function (e) { 
      e.preventDefault();
      modal.open(animal);
    });
    cardBody.append(img);
    cardAnimal.append(cardBody);
    const footer = $('<div class="card-footer text-muted">');
    const button = $('<button type="button" class="btn btn-secondary btn-lg btn-block"><i class="bi bi-volume-up-fill"></i></button>');
    button.click(function (e) { 
      e.preventDefault();
      reproducirSonido(animal);
    });
    footer.append(button);
    cardAnimal.append(footer);
    col.append(cardAnimal);
    listTag.append(col);
  }

  return {
    agregarAnimal: (animal) => {
      agregarTagAnimal(animal);
    }
  }
})();