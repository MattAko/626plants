import { Injectable } from "@angular/core";
import { Product } from "./shared/Product.model";

@Injectable({providedIn: 'root'})
export class CartService{
    shoppingCart: Product[] = [
        new Product(1, 'Monsterra', 1400, 1, '', 'a green plant'),
        new Product(2, 'Monsterra marble', 15000, 1, '', 'a green plant with some white')
    ];

    constructor(){

    }

    getItems(){
        return this.shoppingCart.slice();
    }
}