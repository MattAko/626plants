import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminProduct } from '../../shared/admin-product.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  shop: AdminProduct[];
  shopSub: Subscription;

  constructor(private manage: ManagementService) {}

  ngOnInit(): void {
    this.manage.getShop(true);
    this.shopSub = this.manage.shopChanged.subscribe((shop) => {
      this.shop = shop;
    });
  }
}
