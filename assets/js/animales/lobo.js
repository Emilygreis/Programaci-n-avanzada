import { reproductor } from "../reproductor.js";
import { Animales } from "./animales.js";

export class Lobo extends Animales {
  Aullar() {
    reproductor.play(this._sonido);
  }
}