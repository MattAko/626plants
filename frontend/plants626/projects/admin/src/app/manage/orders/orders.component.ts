import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/Order.model';
import { AdminProduct } from '../../shared/admin-product.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  ordersObs: Observable<Order[]>;
  mobile: boolean;
  constructor(private manage: ManagementService) {}

  ngOnInit(): void {
    // Check for mobile display
    this.mobile = window.innerWidth < 768;

    this.ordersObs = this.manage.getOrders();
    this.ordersObs.subscribe((orders) => {
      console.log(orders);
      this.orders = orders;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('resizing...');
    this.mobile = window.innerWidth < 1024;
  }
}
