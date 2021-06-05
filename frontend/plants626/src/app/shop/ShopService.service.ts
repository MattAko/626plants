import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../shared/Product.model';
@Injectable({
  providedIn: 'root',
})
export class ShopService {
  ShopItems: Product[]; 
  shopChanged = new Subject<Product[]>();
  productUpdated = new Subject<Product>();

  constructor(private http: HttpClient) {
    console.log('ShopService started...');
  }

  /*
    Fetch shop for /api/loadShop
    */
  fetchShop() {
    console.log('Fetching shop...');
  
    let params = new HttpParams().set('all', 'true');
    this.http
      .get<Product[]>('/api/shop', {
        params: params
      })
      .subscribe((response: Product[]) => {
        this.setShop(response);
      });


  }

  /*
    Update shop, mainly used for fetchShop()
    */
  setShop(products: Product[]) {
    this.ShopItems = products;
    this.shopChanged.next(this.ShopItems.slice());
    
  }

  /* @returns: returns copy of ShopItems */
  getShop() {
    console.log('Getting shop...');
    console.log(this.ShopItems.slice());
    return this.ShopItems.slice();
  }

  convertToDollars(cents: number) {
    return `${cents / 100}.${cents}`;
  }

  fetchProduct(id: string) {
    let params = new HttpParams().set('id', id);
    return this.http
      .get<Product>('/api/shop', {
        params: params,
      })
      .subscribe((response: Product) => {
        this.productUpdated.next(response);
      });
  }
}
