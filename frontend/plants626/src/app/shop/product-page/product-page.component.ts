import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product;
  subscription: Subscription;
  isAvailable: Boolean = true;

  selectedImageUrl: string;   // Used for large image preview for mobile devices 
  enlargedImageUrl: string;
  hasScrolled: boolean = false;
  added: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private shopSerivce: ShopService,
    private cartService: CartService
  ) {}

  /**
   * 1. Load id from route parameter
   * 2. Check shopService if shop information has already been loaded.
   * 3. Get product information from shopService
   * 4. Check if product is already in cart via cartService
   */
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const productId: number = +params['id'];

      // Check if shop has been loaded
      if (!this.shopSerivce.ShopItems) {
        this.shopSerivce.fetchShop(); // Fetch shop if not already done.
      } else {
        this.product = this.shopSerivce.getProduct(productId);
        this.selectedImageUrl = this.product.images[0];

        this.isAvailable = !this.cartService.check(productId);
      }

      this.subscription = this.shopSerivce.shopChanged.subscribe(
        (shop: Product[]) => {
          console.log('Hey dummy');
          // Get product information
          this.product = this.shopSerivce.getProduct(productId);

          // Set selected image
          this.selectedImageUrl = this.product.images[0];

          // Check if product is in cart
          this.isAvailable = !this.cartService.check(this.product.id);
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
      this.isAvailable = false;
    }
  }

  onImageClick(imageUrl: string){
    if(this.selectedImageUrl === imageUrl || window.innerWidth>768){
      this.enlargedImageUrl = imageUrl;
    }
    this.selectedImageUrl = imageUrl; 
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event){
    this.hasScrolled = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
