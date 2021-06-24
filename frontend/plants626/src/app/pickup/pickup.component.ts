import { Component, OnInit } from '@angular/core';
import { CartService } from '../CartService.service';
import { Cart } from '../shared/Cart.model';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

}
