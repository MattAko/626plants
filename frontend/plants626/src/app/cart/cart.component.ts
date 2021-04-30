import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../CartService.service';
import { Cart } from '../shared/Cart.model';
import { Product } from '../shared/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart;
  cartSubscription: Subscription;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartSubscription = this.cartService.cartChanged.subscribe(
      (cart: Cart) => {
        this.cart = cart;
      }
    );
  }

  
}
