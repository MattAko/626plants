import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../CartService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartSize: number = 0;
  onHomePage: boolean;
  bgOpacity: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartSize = this.cartService.productIds.length;
    this.cartService.cartSizeChanged.subscribe((size) => {
      this.cartSize = size;
    });
    this.bgOpacity = this.router.url === 'cart' ? 1 : 0;
  }

  openLink(url: string) {
    window.open(url);
  }

/**
 * Calculates the color based on the vertical scroll.  
 * @returns {string} CSS color string. 'rgb(x,x,x)
 */
    getColor() {
    // Get the text color based on vertical scroll, which is determined by bgOpacity. 
    const textColor = `rgb(${255 - this.bgOpacity * 255}, ${
      255 - this.bgOpacity * 255
    }, ${255 - this.bgOpacity * 255})`;

    // Only apply this color based on these routes.
    // Otherwise, return black.
    if (
      this.router.url === '/' ||
      this.router.url === '/faq' ||
      this.router.url === '/shop' ||
      this.router.url === '/contact'
    ) {
      return textColor;
    }
    return 'rgb(0,0,0)';
  } 

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    // Only change navbar bg opacity if you are in these routes.
    if (this.router.url === '/' || 'faq' || 'shop' || 'contact') {
      this.bgOpacity = window.pageYOffset / 100;
      if (window.pageYOffset > 100) {
        this.bgOpacity = 1;
      }
    }
  }
}
