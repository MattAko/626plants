import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaypalButtonComponent } from '../paypal-button/paypal-button.component';
import { Product } from '../shared/Product.model';

@Injectable()
export class ShopService{
    constructor(private http: HttpClient){

    }

    getShop(){
        this.http.get('/api/loadShop').subscribe(response => {
            console.log(response);
        })
    }
}