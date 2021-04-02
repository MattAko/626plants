import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/CartService.service';
import { Product } from 'src/app/shared/Product.model';
import { ShopService } from '../ShopService.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product: Product;
  subscription: Subscription;
  available: Boolean = true;

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
          this.available = !this.cartService.CheckItem(this.product);
          console.log(this.available);
        }
      );
    });
  }

  // Adds product to the shopping cart
  AddToCart() {
    // If the product is already in cart, do not add to cart, otherwise, add the product to the cart
    if (!this.cartService.CheckItem(this.product)) {
      this.cartService.Add(this.product);
      console.log('Added to cart');
    } else {
      this.available = false;
    }
  }
}
