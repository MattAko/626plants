export class ShopItem {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public thumbnailUrl: string,
    public sold: boolean,
  ){ }
}
