import { reproductor } from "../reproductor.js";
import { Animales } from "./animales.js";

export class Serpiente extends Animales {
  Sisear() {
    reproductor.play(this._sonido);
  }
}