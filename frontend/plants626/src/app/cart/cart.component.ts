import { Component, OnInit } from '@angular/core';
import { CartService } from '../CartService.service';
import { Product } from '../shared/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[];
  subtotal: number = 0;
  shipping: number;
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    console.log(this.products);
    for (let x of this.products) {
      this.subtotal = this.subtotal + x.price;
    }
    this.total = this.shipping ? this.subtotal + this.shipping: this.subtotal;
  }
}
