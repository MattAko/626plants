import { Injectable } from '@angular/core';
import { Product } from './shared/Product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  tempDate = new Date('December 25, 1995 23:15:30');
  shoppingCart: Product[] = [
    new Product(4, 'Monsterra', 1400, 1, [''], 'a green plant', this.tempDate),
    new Product(
      5,
      'Monsterra marble',
      15000,
      1,
      [''],
      'a green plant with some white',
      this.tempDate
    ),
  ];

  constructor() {}

  getItems() {
    return this.shoppingCart.slice();
  }

  /*
        Add a product to shopping cart array
    */
  Add(product: Product) {
    this.shoppingCart.push(product);
  }

  /*
        Removes the given index from shopping cart array
    */
  Remove(index: number) {
    this.shoppingCart.splice(index);
  }

  /*
        Checks if given product is already in cart
        @return: Boolean; true if product is found, false otherwise.
    */
  CheckItem(product: Product): Boolean {
      if(this.shoppingCart.find((value: Product) => {
          if(value.id===product.id){
              return value;
          }
      })){
          return true;
      }else{
          return false;
      }
    
  }
}
