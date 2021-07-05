import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared/Product.model';
import { ShopService } from './ShopService.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: []
})
export class ShopComponent implements OnInit, OnDestroy {
  shopItems: Product[];
  shopChanged: Subscription;
  loading: boolean = false;
  isShopEmpty: boolean = false;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.fetchShop()
    this.loading = true;
    this.shopChanged = this.shopService.shopChanged.subscribe((items: Product[]) => {
      this.loading = false;
      this.shopItems = items;

      if(this.shopItems.length === 0){
        this.isShopEmpty = true;
      }
    });
  }

  ngOnDestroy(){
    this.shopChanged.unsubscribe();
  }

}
