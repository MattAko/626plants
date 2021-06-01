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
  bgOpacity: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartSize = this.cartService.productIds.length;
    this.cartService.cartSizeChanged.subscribe((size) => {
      this.cartSize = size;
    });
    this.bgOpacity = this.router.url === 'cart' ? 1: 0;
  }

  openLink(url: string) {
    window.open(url);
  }

  getTextColor(){
    const textColor = `rgb(${255-this.bgOpacity*255}, ${255-this.bgOpacity*255}, ${255-this.bgOpacity*255})`

    if(this.router.url === '/' || this.router.url=== '/faq' || this.router.url==='/shop' || this.router.url==='/contact'){
      console.log(this.router.url)
      return textColor;
    }
    return 'rgb(0,0,0)'
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
    // Change opacity
    console.log(this.router.url)
    if(this.router.url==='/' || 'faq' || 'shop' || 'contact'){
      this.bgOpacity = window.pageYOffset/100;
      if(window.pageYOffset > 100){
        this.bgOpacity = 1;
      }
    }
    

    if(this.router.url==="/"){
      if(window.pageYOffset>this.prevYOffset){

      }
      this.prevYOffset = window.pageYOffset;
    }
  } 
}
