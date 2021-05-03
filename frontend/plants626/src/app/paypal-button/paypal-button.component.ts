import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../CartService.service';
import { Cart } from '../shared/Cart.model';

declare let paypal: any;
@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css'],
})
export class PaypalButtonComponent implements OnInit {
  @ViewChild('button', { static: true }) paypalElement: ElementRef;
  cart: Cart;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    let paypalConfig = {
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: 'Test order',
              currency_code: 'USD',
              value: 'amt',
              amount: {
                value: this.cart.total,
                description: '626plants'
              },
            },
          ],
        });
      },
      onApprove: this.onApprove,
      onError: (err) => {
        console.log('There was an error: ' + err);
      },
    };
    paypal.Buttons(paypalConfig).render(this.paypalElement.nativeElement);
  }

  private onApprove(data, actions) {
    console.log('onApprove called');
    return actions.order.capture().then((details) => {
      console.log('Transaction completed');
      console.log(details);
    });
  }

  // private createOrder(data, actions) {
  //   console.log('Create order called');
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         description: 'Test order',
  //         currency_code: 'USD',
  //         value: 'amt',
  //         amount: {
  //           value: this.total,
  //         },
  //       },
  //     ],
  //   });
  // }
}
