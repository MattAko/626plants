import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare let paypal: any;
@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit {
  @ViewChild('button', {static: true}) paypalElement: ElementRef;
  constructor() { }
 
  paypalConfig = {
    createOrder: this.createOrder,
    onApprove: this.onApprove,
    onError: err => {
      console.log('There was an error: ' + err)
    }
  }  

  ngOnInit(): void {
    paypal.Buttons(this.paypalConfig).render(this.paypalElement.nativeElement)
  }

  private onApprove(data, actions){
    console.log('onApprove called');
    return actions.order.capture().then((details) => {
      console.log('Transaction completed');
      console.log(details)
    });
  }

  private createOrder(data, actions){
    console.log('Create order called');
    console.log(actions)
    return actions.order.create({
      purchase_units: [{
        description: 'Test order',
        currency_code: 'USD',
        value: 'amt',
        amount: {
          value: '17.50'
        }
      }]
    })
  }
}
