import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../CartService.service';
import { Cart } from '../shared/Cart.model';
import { Product } from '../shared/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart;
  cartSubscription: Subscription;
  errors: number[];
  errorProducts: Product[];
  loading: boolean = false;

  constructor(private cartService: CartService, private router: Router ) {}

  ngOnInit(): void {
    this.cartService.fetchCart();
    this.cart = this.cartService.cart;
    this.cartSubscription = this.cartService.cartChanged.subscribe(
      (cart: Cart) => {
        this.cart = cart;
      }
    );
  }

  /*
   *  Check if cart is valid before going to checkout
   *  @param none
   *  @return none
   */
  authorizeCart() {
    this.loading = true;
    interface authorizedCart {
      valid: boolean;
    }
    this.cartService.authorizeCart().subscribe(
      (response: authorizedCart) => {
        if (response.valid) {
          this.router.navigate(['/checkout']);
        }
      },
      (errors: any) => {
        this.loading = false;
        this.errors = errors;
        this.errorProducts = [];  // reset
        this.errors.map((errorId) => {
          console.log(this.cartService.getItem(errorId))
          this.errorProducts.push(this.cartService.getItem(errorId))
          console.log(this.errorProducts)
        })
      }
    );
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
