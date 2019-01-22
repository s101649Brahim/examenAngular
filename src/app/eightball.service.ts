import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class EightballService {
  constructor() {}

  receptToevoegen(
    name: string,
    caloriën: number,
    ingrediënten: string,
    tijd: number
  ): string {
    let antwoord = "";
    if (localStorage.getItem(name) == null) {
      antwoord = `${name}&: caloriën=${caloriën}&, ingrediënten=${ingrediënten}&, tijd=${tijd}&`;
      localStorage.setItem(name, `${caloriën}&${ingrediënten}&${tijd}&`);
    } else {
      antwoord = localStorage.getItem(name);
    }
    return antwoord;
  }
}
