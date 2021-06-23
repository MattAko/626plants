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

  constructor(private http: HttpClient) { }

  /**
   * Fetch shop from /api/shop
   */
  fetchShop() {
    console.log('Fetching shop...');

    let params = new HttpParams().set('all', 'true');
    this.http
      .get<Product[]>('/api/shop', {
        params: params,
      })
      .subscribe((response: Product[]) => {
        this.setShop(response); // Update shop
      });
  }

  /**
   * Update the shop. Used by fetchShop.
   * @param {Product[]} products Array of products.
   */
  setShop(products: Product[]) {
    this.ShopItems = products;
    this.shopChanged.next(this.ShopItems);
  }

  /**
   * Get shop
   * @returns Copy of ShopItems
   */
  getShop() {
    console.log('Getting shop...');
    console.log(this.ShopItems.slice());
    return this.ShopItems.slice();
  }


  getProduct(id: number){
    return this.ShopItems.find(item => +item.id===id)
  }
 
}
