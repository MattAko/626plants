import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cart } from './shared/Cart.model';
import { Product } from './shared/Product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _cart = new Cart([], 0, 0, 0);
  cartChanged = new Subject<Cart>();

  constructor(private http: HttpClient) {}

  get cart() {
    return this._cart;
  }

  /*
   * Update both subtotal and total for shopping cart
   */
  updateTotal() {
    let total: number = 0;
    this._cart.products.map((cartItem) => {
      total += cartItem.price;
    });
    this._cart.total = total;
    this._cart.subtotal = total;
  }

  /*
   *  Search for a product in the cart based on the id
   *  Used for throwing errors when processing cart
   *  @param id: number
   *  @return product: Product
   */
  getItem(id: number) {
    return this._cart.products.find((prod) => prod.id === id);
  }

  getItems() {
    return this._cart.products.slice();
  }

  /*
   *  Add a product to shopping cart array, then add to localStorage
   */
  Add(product: Product) {
    this._cart.products.push(product);
    this.updateStorage();
    this.cartChanged.next(this._cart);
    this.updateTotal();
  }

  /*
   *  Removes the given index from shopping cart array
   */
  remove(index: number) {
    this._cart.products.splice(index, 1);
    this.updateStorage();
    this.cartChanged.next(this._cart);
  }

  /*
   * Removes item based on ID
   */
  removeItem(id: number) {
    console.log('removing item...');
    this._cart.products.map((product, index) => {
      console.log(product);
      if (product.id === id) {
        console.log(product.id + ' is the same as ' + id);
        this._cart.products.splice(index, 1);
        this.cartChanged.next(this._cart);
        this.updateTotal();
        this.updateStorage();
        return;
      }
    });
  }

  /*
   *    Checks if given product is already in cart
   *    @return: Boolean: true if product is found, false otherwise.
   */
  checkItem(product: Product): Boolean {
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
  updateStorage() {
    localStorage.setItem('cart', JSON.stringify(this._cart.products));
    localStorage.setItem('cart-date', new Date().toString());
  }

  /*
   *  Check localStorage for cartItems
   *  If found, set 'shoppingCart' and set '_total'
   *  @return: None
   */
  loadStorage() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log('loading from storage...');
    console.log(cart);
    if (cart) {
      this._cart.products = cart;
      this.updateTotal();
    }
  }

  /*
   *  Authorize shopping cart
   */
  authorizeCart() {
    return this.http
      .post('/api/authorizeCart', {
        cart: this._cart,
      })
      .pipe(catchError(this.handleError));
  }

  /*
   *  Throw errors on authorize cart failures
   *  @param errorResponse: HttpErrorResponse
   *  @return: throwError()
   */
  handleError(errorResponse: HttpErrorResponse) {
    const { error } = errorResponse;
    if (error.invalid) {
      return throwError(error.errorId);
    } else {
      return throwError('Error thrown');
    }
  }
}
