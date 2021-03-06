import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cart } from './shared/Cart.model';
import { Order } from './shared/Order.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  /*
   * Customer adds the ID's of the products they want to checkout to cart
   * CartService retrieves the cart details from the server
   */

  private _productIds: number[] = [];
  // private _cart = new Cart([], 0, {cost, carrier, method, signature }, 0); // for visual purposes
  private _cart: Cart = {
    products: [],
    subtotal: 0,
    shipping: { cost: 0, carrier: '', method: '', signature: false },
    total: 0,
  };
  cartChanged = new Subject<Cart>();
  cartSizeChanged = new Subject<number>();
  authorized = new BehaviorSubject<boolean>(false);
  paid = new BehaviorSubject<boolean>(false);
  confirmation: Order;

  constructor(private http: HttpClient) {}

  get productIds() {
    return this._productIds.slice();
  }

  get cart() {
    return this._cart;
  }

  /*
   * Update both subtotal and total for shopping cart
   */
  updateTotal() {
    let subtotal: number = 0;
    this._cart.products.map((cartItem) => {
      subtotal += cartItem.price;
    });
    this._cart.total = subtotal + this._cart.shipping.cost;
    this._cart.subtotal = subtotal;
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
   *  Add product ID to productIds array, then add to localStorage
   *  Updating cart not required since user cannot add to cart within cart screen
   *  @param id: number
   */
  add(id: number) {
    this._productIds.push(id);
    this.cartSizeChanged.next(this._productIds.length);
    this.updateStorage();
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
   *  Remove item based on ID, update cart, then update storage
   *  @param id: number
   */
  removeItem(id: number) {
    this._cart.products.map((product, index) => {
      if (product.id === id) {
        this._cart.products.splice(index, 1);
        this.updateTotal();
        this.cartChanged.next(this._cart);
      }
    });
    this._productIds.map((productId, index) => {
      if (productId === id) {
        this._productIds.splice(index, 1);
        this.updateStorage();
      }
    });
    this.cartSizeChanged.next(this._productIds.length);
  }

  /**
   *  Check if item is already in user's cart
   *  @param id: number
   *  @return: boolean; true if item is in cart
   */
  check(id: number): Boolean {
    if (this._productIds.find((ID) => ID === id)) {
      return true;
    } else {
      return false;
    }
  }

  /*
   *  Add the cart to localStorage
   */
  updateStorage() {
    localStorage.setItem('productIds', JSON.stringify(this._productIds));
    localStorage.setItem('cart-date', new Date().toString());
  }

  /*
   *  Check localStorage for cartItems
   *  If found, set 'shoppingCart' and set '_total'
   *  @return: None
   */
  loadStorage() {
    const productIds = JSON.parse(localStorage.getItem('productIds'));
    if (productIds) {
      this._productIds = productIds;
      this.cartSizeChanged.next(this._productIds.length);
    }
  }

  /*
   *  Clear the cart
   *  @param none
   *  @return none
   */
  empty() {
    this._productIds = [];
    this._cart = {
      products: [],
      subtotal: 0,
      shipping: { cost: 0, carrier: '', method: '', signature: false },
      total: 0,
    };
    this.cartSizeChanged.next(0);
    localStorage.removeItem('productIds');
    localStorage.removeItem('cart-date');
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
   *  Fetch cart details using product ID's
   *  @param none
   *  @return none
   */
  fetchCart() {
    if (this._productIds) {
      console.log('Fetching products');
      console.log(this._productIds);
      this.http
        .post<Cart>('/api/getCart', {
          productIds: this._productIds,
        })
        .subscribe((cart) => {
          this._cart = cart;
          this.cartChanged.next(this._cart);
        });
    } else {
      console.log('Cart is empty');
    }
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

  /**
   * Update shipping costs for cart.
   * @param carrier String value representing which shipping carrier user selected. Either 'ups' or 'usps'
   * @param method String value representing which shipping method user selected. Either 'overnight' or 'two-day'
   * @param signature Boolean representing whether the user wanted the order to be delivered only if signature is received.
   */
  AddShipping(carrier: string, method: string, signature: boolean) {
    let shippingMultiplier: number = 0;
    let shippingTotalCost: number = 0;
    if (method === 'two-day') {
      shippingMultiplier = 30;
    } else if (method === 'overnight') {
      shippingMultiplier = 55;
    }
    if (carrier === 'ups' && signature) {
      shippingTotalCost += 5;
    }
    shippingTotalCost += shippingMultiplier * this._cart.products.length;
    console.log(this._cart);
    this._cart.shipping.cost = shippingTotalCost;
    this._cart.shipping.carrier = carrier;
    this._cart.shipping.method = method;
    this._cart.shipping.signature = signature;
    this.updateTotal();
  }

  postReservation(name: string, email: string, phone: string, dates: string) {
    interface reservationResponse {
      valid: boolean;
    }
    const reservation = {
      name,
      email,
      phone,
      dates,
      products: this.cart.products,
      total: this.cart.total, 
    }
    return this.http
      .post<reservationResponse>('/api/pickup', reservation)
  }
}
