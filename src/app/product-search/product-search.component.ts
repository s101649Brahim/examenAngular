import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { Product } from "../product";
import { EightballService } from "../eightball.service";

@Component({
  selector: "product-search",
  templateUrl: "./product-search.component.html"
})
export class ProductSearchComponent {
  search: FormGroup;
  product: Product;
  antwoord: string = "";

  ngOnInit() {
    this.search = new FormGroup({
      name: new FormControl(""),
      caloriën: new FormControl(""),
      ingrediënten: new FormControl(""),
      tijd: new FormControl("")
    });
  }

  constructor(private eightballService: EightballService) {}

  onSubmit() {
    this.antwoord = this.eightballService.receptToevoegen(
      this.search.value.name, this.search.value.caloriën, this.search.value.ingrediënten, this.search.value.tijd
    );
  }
}
