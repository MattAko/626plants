import { Product } from './Product.model';

interface Shipping {
  cost: number;
  carrier: string;
  method: string;
  signature: boolean;
}

export class Cart {
  constructor(
    public products: Product[],
    public subtotal: number,
    public shipping: Shipping,
    public total: number
  ) {}
}
