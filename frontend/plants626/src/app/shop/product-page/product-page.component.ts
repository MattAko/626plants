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

  selectedImage: number = 0;
  windowSubscription: Subscription;
  mobile: boolean;

  constructor(
    private route: ActivatedRoute,
    private shopSerivce: ShopService,
    private cartService: CartService,
    private windowService: WindowService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.shopSerivce.fetchProduct(params['id']);
      this.subscription = this.shopSerivce.productUpdated.subscribe(
        (product: Product) => {
          this.product = product;
          this.available = !this.cartService.checkItem(this.product);
        }
      );
    });

    this.mobile = this.windowService.mobileEnabled;
    console.log('mobile:' + this.mobile)
    this.windowSubscription = this.windowService.innerWidthChanged.subscribe((width) => {
      this.mobile = this.windowService.mobileEnabled;
    });
  }

  // Adds product to the shopping cart
  AddToCart() {
    // If the product is already in cart, do not add to cart, otherwise, add the product to the cart
    if (!this.cartService.checkItem(this.product)) {
      this.cartService.Add(this.product);
      console.log('Added to cart');
    } else {
      this.available = false;
    }
  }

  ngOnDestroy() {
    this.windowSubscription.unsubscribe();
  }

  onImageClick(index: number){
    this.selectedImage = index;
  }
}
