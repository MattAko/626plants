import { Component, Input, OnInit } from '@angular/core';
import { AdminProduct } from '../../../shared/admin-product.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input('item') order: AdminProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
