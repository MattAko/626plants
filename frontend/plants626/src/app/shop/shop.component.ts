import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopItem } from '../shared/ShopItem.model';
import { ShopService } from './ShopService.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: []
})
export class ShopComponent implements OnInit, OnDestroy {
  shopItems: ShopItem[];
  shopChanged: Subscription;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.fetchShop()
    this.shopChanged = this.shopService.shopChanged.subscribe((items: ShopItem[]) => {
      console.log('Shop has been changed')
      console.log(items);
      this.shopItems = items;
    });
  }

  ngOnDestroy(){
    this.shopChanged.unsubscribe();
  }

}
