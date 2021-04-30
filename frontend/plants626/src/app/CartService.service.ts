import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from './shared/Cart.model';
import { Product } from './shared/Product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  //shoppingCart: Product[] = [];
  //shoppingCartChanged = new Subject<Product[]>();
  private _cart = new Cart([], 0, 0, 0);
  cartChanged = new Subject<Cart>();

  constructor() {}

  get cart() {
    return this._cart;
  }

  updateTotal() {
    let total: number = 0;
    this._cart.products.map((cartItem) => {
      total += cartItem.price;
    });
    this._cart.total = total;
    this._cart.subtotal = total;
  }

  getItems() {
    return this._cart.products.slice();
  }

  /*
   *  Add a product to shopping cart array, then add to localStorage
   */
  Add(product: Product) {
    this._cart.products.push(product);
    this.UpdateStorage();
    this.cartChanged.next(this._cart);
    this.updateTotal();
  }

  /*
   *  Removes the given index from shopping cart array
   */
  Remove(index: number) {
    this._cart.products.splice(index, 1);
    this.UpdateStorage();
    this.cartChanged.next(this._cart);
  }

  /*
   * Removes item based on ID
   */
  RemoveItem(id: number) {
    console.log('removing item...');
    this._cart.products.map((product, index) => {
      console.log(product);
      if (product.id === id) {
        console.log(product.id + ' is the same as ' + id);
        this._cart.products.splice(index, 1);
        this.cartChanged.next(this._cart);
        this.updateTotal();
        this.UpdateStorage();
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
      this._cart.products.find((value: Product) => {
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
    localStorage.setItem('cart', JSON.stringify(this._cart.products));
    localStorage.setItem('cart-date', new Date().toString());
  }

  /*
   *  Check localStorage for cartItems
   *  If found, set 'shoppingCart' and set '_total'
   *  @return: None
   */
  LoadStorage() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      this._cart.products = cart;
      this.updateTotal();
    }
  }
}
