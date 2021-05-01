import { Component, OnInit } from '@angular/core';
import { CartService } from '../CartService.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
