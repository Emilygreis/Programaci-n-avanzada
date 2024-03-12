export class Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  get Nombre() {
    return this._nombre;
  }

  get Edad() {
    return this._edad;
  }

  get Img() {
    return this._img;
  }

  get Sonido() {
    return this._sonido;
  }
  
  get Comentarios() {
    return this._comentarios;
  }

  set Comentarios(nuevo_comentario) {
    this._comentarios = nuevo_comentario;
  }
}