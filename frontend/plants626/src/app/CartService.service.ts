import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './shared/Product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  shoppingCart: Product[] = [];
  shoppingCartChanged = new Subject<Product[]>();
  subtotal: number = 0;
  shipping: number;
  total: number = 0;

  constructor() {}

  getItems() {
    return this.shoppingCart.slice();
  }

  /*
   *  Add a product to shopping cart array, then add to localStorage
   */
  Add(product: Product) {
    this.shoppingCart.push(product);
    this.UpdateStorage();
    this.shoppingCartChanged.next(this.shoppingCart);
  }

  /*
   *  Removes the given index from shopping cart array
   */
  Remove(index: number) {
    this.shoppingCart.splice(index);
    this.UpdateStorage();
    this.shoppingCartChanged.next(this.shoppingCart);
  }

  /*
   * Removes item based on ID
   */
  RemoveItem(id: number) {
    console.log('removing item...');
    this.shoppingCart.map((product, index) => {
      console.log(product);
      if (product.id === id) {
        this.shoppingCart.splice(index);
        this.shoppingCartChanged.next(this.shoppingCart);
        return;
      }
    });
  }

  /*
   *    Checks if given product is already in cart
   *    @return: Boolean: true if product is found, false otherwise.
   */
  CheckItem(product: Product): Boolean {
    if (
      this.shoppingCart.find((value: Product) => {
        if (value.id === product.id) {
          return value;
        }
      })
    ) {
      return true;
    } else {
      return false;
    }
  }

  /*
   *  Add the cart to localStorage
   */
  UpdateStorage() {
    localStorage.setItem('cart', JSON.stringify(this.shoppingCart));
    localStorage.setItem('cart-date', new Date().toString());
  }

  /*
   *
   */
  LoadStorage() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      this.shoppingCart = cart;
    }
  }
}
