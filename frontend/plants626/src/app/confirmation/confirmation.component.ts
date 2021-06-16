import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../CartService.service';
import { Order } from '../shared/Order.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  receipt: Order;
  
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    if(!this.cartService.confirmation){
      this.router.navigate(['/']);
    }
    this.receipt = this.cartService.confirmation;
  }

}
