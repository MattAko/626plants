export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number,
    public images: string[],
    public description: string, 
    public posted: Date,
    public sold: boolean
  ) {}
}
