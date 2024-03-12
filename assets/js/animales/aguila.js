import { reproductor } from "../reproductor.js";
import { Animales } from "./animales.js";

export class Aguila extends Animales {
  Chillar() {
    reproductor.play(this._sonido);
  }
}