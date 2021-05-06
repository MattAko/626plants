import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../CartService.service';
import { Cart } from '../shared/Cart.model';
import { HttpClient } from '@angular/common/http';

declare let paypal: any;
@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css'],
})
export class PaypalButtonComponent implements OnInit {
  @ViewChild('button', { static: true }) paypalElement: ElementRef;
  cart: Cart;

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    let paypalConfig = {
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: '626Plants',
              currency_code: 'USD',
              value: 'amt',
              amount: {
                value: this.cart.total,
                description: '626Plants'
              },
            },
          ],
        });
      },
      onApprove: (data, actions) => {

        this.http.post('/api/onapprove', {
          data: data
        })
        .subscribe((response) => {
          console.log(response);
        })
        console.log(data)
        console.log('actions')
        console.log(actions)
        return actions.order.capture().then((details) => {
          this.cartService.empty();
          console.log('Transaction completed');
          console.log(details);
        })
      },
      onError: (err) => {
        console.log('There was an error: ' + err);
      },
    };
    paypal.Buttons(paypalConfig).render(this.paypalElement.nativeElement);
  }
}
