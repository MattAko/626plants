import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../CartService.service';
import { Cart } from '../shared/Cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart;
  cartSubscription: Subscription;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartSubscription = this.cartService.cartChanged.subscribe(
      (cart: Cart) => {
        this.cart = cart;
      }
    );
  }

  /*
   *  Check if cart is valid before going to checkout
   */
  authorizeCart(){
    interface authorizedCart{
      valid: boolean
    }
    this.cartService.authorizeCart().subscribe((response: authorizedCart) => {
      console.log(response)
      if(response.valid){
        this.router.navigate(['/checkout']);
      }
      else{
        console.log('Error received')
      }
    })
  } 
}
