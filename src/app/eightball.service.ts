import { Injectable } from "@angular/core";

@Injectable()
export class EightballService {
  constructor() {}

  receptToevoegen(
    name: string,
    caloriën: string,
    ingrediënten: string,
    tijd: string
  ): string {
    let antwoord = "";
    if (localStorage.getItem(name) == null) {
      antwoord = `${name}: caloriën=${caloriën}, ingrediënten=${ingrediënten}, tijd=${tijd} minuten`;
      localStorage.setItem(
        name,
        ` caloriën=${caloriën}, ingrediënten=${ingrediënten}, tijd=${tijd} minuten`
      );
    } else {
      antwoord = localStorage.getItem(name);
    }
    return antwoord;
  }
}
