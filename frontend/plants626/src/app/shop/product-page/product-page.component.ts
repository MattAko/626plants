import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/CartService.service';
import { Product } from 'src/app/shared/Product.model';
import { WindowService } from 'src/app/WindowService.service';
import { ShopService } from '../ShopService.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product;
  subscription: Subscription;
  available: Boolean = true;

  added: boolean = false;
  mobile: boolean;

  constructor(
    private route: ActivatedRoute,
    private shopSerivce: ShopService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.shopSerivce.fetchProduct(params['id']);
      this.subscription = this.shopSerivce.productUpdated.subscribe(
        (product: Product) => {
          this.product = product;
          console.log(this.product);
          this.available = !this.cartService.check(this.product.id);
        }
      );
    });
  }

  // Adds product to the shopping cart
  addToCart() {
    // If the product is already in cart, do not add to cart, otherwise, add the product to the cart
    console.log(this.cartService.check(this.product.id));
    if (!this.cartService.check(this.product.id)) {
      this.cartService.add(this.product.id);
      console.log('Added to cart');
      this.added = true;
    } else {
      this.added = false;
      this.available = false;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
