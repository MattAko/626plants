import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/CartService.service';
import { Cart } from 'src/app/shared/Cart.model';
import { Product } from 'src/app/shared/Product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit, OnDestroy {
  products: Product[];
  cartSubscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.cartSubscription = this.cartService.cartChanged.subscribe((cart: Cart) => {
      this.products = cart.products;
    })
  }

  removeFromCart(id: number) {
    this.cartService.RemoveItem(id);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
  }
}
