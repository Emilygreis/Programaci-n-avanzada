export const modal = (() => {
  function openModal(animal) {
    const cardAnimal = $('<div class="card text-white bg-secondary text-center" style="width: 100%;">');
    const img = $(`<img class="card-img-top" src ="/assets/imgs/${animal.Img}" >`);
    cardAnimal.append(img)
    const cardBody = $('<div class="card-body">');
    const edad = $(`<h5>${animal.Edad}</h5>`);
    cardBody.append(edad);
    const titulo = $(`<h5>Comentarios</h5>`);
    cardBody.append(titulo);
    const comentarios = $(`<p>${animal.Comentarios}</p>`);
    cardBody.append(comentarios);
    cardAnimal.append(cardBody);
    $('#exampleModal .modal-body').empty()
    $('#exampleModal .modal-body').append(cardAnimal);
    $('#exampleModal').modal('show')
  }

  return {
    open: (animal) => {
      openModal(animal);
    }
  }
})();