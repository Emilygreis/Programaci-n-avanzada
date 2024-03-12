import { reproductor } from "../reproductor.js";
import { Animales } from "./animales.js";

export class Leon extends Animales {
  Rugir() {
    reproductor.play(this._sonido);
  }
}