import { Component, OnInit } from '@angular/core';
import { ShopService } from './ShopService.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getShop();
  }

}
