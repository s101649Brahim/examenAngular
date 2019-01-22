export class Product {
  constructor(public name: string) {}

  toForm(): string {
    return `name=${this.name}`;
  }
}
