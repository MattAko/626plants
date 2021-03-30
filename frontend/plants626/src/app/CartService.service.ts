import { Injectable } from "@angular/core";
import { Product } from "./shared/Product.model";

@Injectable({providedIn: 'root'})
export class CartService{
    tempDate = new Date('December 25, 1995 23:15:30')
    shoppingCart: Product[] = [
        new Product(1, 'Monsterra', 1400, 1, '', 'a green plant', this.tempDate),
        new Product(2, 'Monsterra marble', 15000, 1, '', 'a green plant with some white', this.tempDate)
    ];

    constructor(){

    }

    getItems(){
        return this.shoppingCart.slice();
    }
}