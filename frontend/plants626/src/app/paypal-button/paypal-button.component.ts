import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../CartService.service';
import { Cart } from '../shared/Cart.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

declare let paypal: any;
@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css'],
})
export class PaypalButtonComponent implements OnInit {
  @ViewChild('button', { static: true }) paypalElement: ElementRef;
  cart: Cart;

  constructor(private cartService: CartService, private http: HttpClient, private router: Router) {}

  handleError(error: HttpErrorResponse){
    return throwError('Error capturing payment');
  }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    let items = [];
    this.cartService.cart.products.map((prod) => {
      const item = {
        name: prod.name,
        unit_amount: {
          value: prod.price,
          currency_code: 'USD'
        },
        quantity: prod.quantity,
      }
      items.push(item);
    });
    console.log(items)
    let paypalConfig = {
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: '626Plants',
              amount: {                
                currency_code: 'USD',
                value: this.cart.total,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: this.cart.total 
                  }
                }
              },
              items: items
            },
          ],
        });
      },
      onApprove: (data, actions) => {
        this.http.post('/api/onapprove', {
          data: data
        })
        .pipe(catchError(this.handleError))
        .subscribe((response) => {
          console.log(response);
          this.cartService.empty();
          this.router.navigate(['/'])
        })
        // console.log(data)
        // console.log('actions')
        // console.log(actions)
        // return actions.order.capture().then((details) => {
        //   this.cartService.empty();
        //   console.log('Transaction completed');
        //   console.log(details);
        // })
      }
    };
    paypal.Buttons(paypalConfig).render(this.paypalElement.nativeElement);
  }
}
