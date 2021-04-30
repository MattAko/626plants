import { Product } from './Product.model'

export class Cart{
    constructor(
        public products: Product[],
        public subtotal: number,
        public shipping: number,
        public total: number
    ){ }
}