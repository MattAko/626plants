import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Product.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input('itemDetails') shopItem: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
