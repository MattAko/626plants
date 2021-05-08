import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../CartService.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  payer: string;
  email_address: string;
  id: string;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    if(!this.cartService.confirmation){
      this.router.navigate(['/']);
    }
    const { given_name, surname, email_address } = this.cartService.confirmation.payer;
    this.payer = given_name + ' ' + surname;
    this.email_address = email_address;
    this.id = this.cartService.confirmation.id;
  }

}
