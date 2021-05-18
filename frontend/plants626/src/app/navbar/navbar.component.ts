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
  prevYOffset: number;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartSize = this.cartService.productIds.length;
    this.cartService.cartSizeChanged.subscribe((size) => {
      this.cartSize = size;
    });
  }

  openLink(url: string) {
    window.open(url);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
    if(this.router.url==="/"){
      if(window.pageYOffset>this.prevYOffset){

      }
      this.prevYOffset = window.pageYOffset;
    }
  } 
}
