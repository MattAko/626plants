import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../shared/Product.model';

@Injectable({providedIn: 'root'})
export class ShopService {
  ShopItems: Product[] = [];
  shopChanged = new Subject<Product[]>();
  constructor(private http: HttpClient) {}

  /*
    Fetch shop for /api/loadShop
    */
  fetchShop() {
    this.http
      .get<{ items: Product[] }>('/api/loadShop')
      .subscribe((response) => {
        this.setShop(response.items);
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
  getShop(){
      console.log('Getting shop...')
      console.log(this.ShopItems.slice())
      return this.ShopItems.slice();
  }
}
