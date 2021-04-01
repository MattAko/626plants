import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../shared/Product.model';

@Injectable({
    providedIn: 'root'
})
export class ShopService {
  ShopItems: Product[];
  shopChanged = new Subject<Product[]>();
  productUpdated = new Subject<Product>();
  lastestProductId: number; 
  latestProduct: Product; 

  constructor(private http: HttpClient) {
      console.log('ShopService started...')
  }

  /*
    Fetch shop for /api/loadShop
    */
  fetchShop() {
      console.log('Fetching shop...')
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
    if(this.lastestProductId){
      this.fetchProduct()
      this.getProduct();
    }
  }

  /* @returns: returns copy of ShopItems */
  getShop(){
      console.log('Getting shop...')
      console.log(this.ShopItems.slice())
      return this.ShopItems.slice();
  }

  convertToDollars(cents: number){
      return `${cents/100}.${cents}`
  }

  setLatestProduct(id: number){
    this.lastestProductId = id;
  } 

  getProduct(){
    this.ShopItems.find((product: Product) => {
      if(product.id === this.lastestProductId){
        this.productUpdated.next(product);
      }
    })
  }

  fetchProduct(){
    let params = new HttpParams().set("id", "1");
    this.http.get('/api/getProduct', { 
      headers: new HttpHeaders({"Test" : "Hello"}), 
      params: params
    }).subscribe((response) => {
      console.log(response);
    })
  }
}
