import { reproductor } from "../reproductor.js";
import { Animales } from "./animales.js";

export class Oso extends Animales {
  Grunir() {
    reproductor.play(this._sonido);
  }
}