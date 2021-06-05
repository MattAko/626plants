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
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.fetchShop()
    this.shopChanged = this.shopService.shopChanged.subscribe((items: Product[]) => {
      console.log('Shop has been changed')
      console.log(items);
      this.shopItems = items;
    });
  }

  ngOnDestroy(){
    this.shopChanged.unsubscribe();
  }

}
