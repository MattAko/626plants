export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number,
    public imageUrl: string,
    public description: string, 
  ) {}
}