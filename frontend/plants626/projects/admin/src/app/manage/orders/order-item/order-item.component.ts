import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Order } from '../../../shared/order.model';


@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
})
export class OrderItemComponent implements OnInit {
  @Input('item') order: Order;
  mobile: boolean;
  // Advanced Information toggle
  isVisible: boolean = false; 

  constructor() {}

  ngOnInit(): void {
    this.mobile = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = window.innerWidth < 768;
  }

  onRedirect(prod: number){
    window.open(`http://626plants.com/shop/${prod}`);
  }

  toggleAdvancedInfo(){
    this.isVisible = !this.isVisible;
  }

  openShop(id:number){
    window.open(`https://626plants.com/shop/${id}`, "_blank")
  }
}
