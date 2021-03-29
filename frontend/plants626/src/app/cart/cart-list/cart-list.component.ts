import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/CartService.service';
import { Product } from 'src/app/shared/Product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products: Product[]
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }

}
