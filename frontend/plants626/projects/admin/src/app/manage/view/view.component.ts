import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminProduct } from '../../shared/admin-product.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  shop: AdminProduct[];
  shopSub: Subscription;

  constructor(private manage: ManagementService) { }

  ngOnInit(): void {
    this.manage.getShop();
    this.shopSub = this.manage.shop.subscribe(shop => {
      this.shop = shop;
    })    
  }

}
