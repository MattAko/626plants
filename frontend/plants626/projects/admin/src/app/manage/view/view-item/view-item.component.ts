import { Component, Input, OnInit } from '@angular/core';
import { AdminProduct } from '../../../shared/admin-product.model';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  @Input('item') item: AdminProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
