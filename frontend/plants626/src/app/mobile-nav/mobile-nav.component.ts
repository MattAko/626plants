import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../CartService.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent implements OnInit {
  @ViewChild('hamburger') hamburgerMenuRef;
  dropdownVisible: boolean = false;
  cartSize: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSize = this.cartService.productIds.length;
    this.cartService.cartSizeChanged.subscribe((size) => {
      this.cartSize = size;
    });
  }

  // Toggle dropdown menu based on whether the user clicks the hamburger menu.
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.dropdownVisible = this.hamburgerMenuRef.nativeElement.contains(
      event.target
    )
      ? !this.dropdownVisible
      : false;
  }
}
