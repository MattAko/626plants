import { Component, Input, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/shared/ShopItem.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input('itemDetails') shopItem: ShopItem;

  constructor() { }

  ngOnInit(): void {
  }

}
