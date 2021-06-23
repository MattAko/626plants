import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/CartService.service';
import { Product } from 'src/app/shared/Product.model';
import { ShopService } from '../ShopService.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  animations: [
    trigger('popupState', [
      state(
        'offscreen',
        style({
          transform: 'translateY(100px)',
        })
      ),
      state(
        'valid',
        style({
          transform: 'translateY(0)',
          backgroundColor: '#90EE90',
          border: '2px solid #29524A',
        })
      ),
      state(
        'invalid',
        style({
          transform: 'translateY(0)',
          backgroundColor: '#EF4444',
          border: '2px solid #991B1B',
        })
      ),
      transition('offscreen <=> *', [animate('0.5s')]),
    ]),
  ],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product;
  subscription: Subscription;
  isAvailable: Boolean = true;

  selectedImageUrl: string; // Used for large image preview for mobile devices
  enlargedImageUrl: string;
  hasScrolled: boolean = false;
  added: boolean = false;

  state: string = 'offscreen'; // Popup state, can be either 'onscreen' or 'offscreen'
  popupMessage: string = '';

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

  /**
   * Adds product to cart.
   *  1. Check if product is already in the cart.
   */
  addToCart() {
    // Check cart
    if (!this.cartService.check(this.product.id)) {
      this.cartService.add(this.product.id);
      this.state = 'valid';
      this.popupMessage = `${this.product.name} was added to your cart!`;

      this.added = true;
    } else {
      this.added = false;
      this.isAvailable = false;

      //
      this.state = 'invalid';
      this.popupMessage = `${this.product.name} is already in your cart!`;
    }

    // Hide popup after 3 seconds;
    setTimeout(() => {
      console.log(this.state);
      this.state = 'offscreen';
      console.log(this.state);
    }, 3000);
  }

  onImageClick(imageUrl: string) {
    if (this.selectedImageUrl === imageUrl || window.innerWidth > 768) {
      this.enlargedImageUrl = imageUrl;
    }
    this.selectedImageUrl = imageUrl;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.hasScrolled = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
