import { Component, OnInit } from '@angular/core';
import { CartService } from '../CartService.service';
import { Cart } from '../shared/Cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Cart;
  paid: boolean;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartService.cartChanged.subscribe(cart => {
      this.cart = cart;
    })

    this.cartService.paid.subscribe(status => {
      this.paid = status;
    })
  }

}
