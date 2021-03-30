import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared/Product.model';
import { ShopService } from './ShopService.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {
  shopItems: Product[];
  shopChanged: Subscription;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.fetchShop()
    this.shopChanged = this.shopService.shopChanged.subscribe((items: Product[]) => {
      this.shopItems = items;
    });
  }

}
