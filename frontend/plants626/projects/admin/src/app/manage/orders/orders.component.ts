import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { AdminProduct } from '../../shared/admin-product.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders: AdminProduct[];
  ordersObs: Observable<AdminProduct[]>
  constructor(private manage: ManagementService) { }

  ngOnInit(): void {
    this.ordersObs = this.manage.getOrders();
    this.ordersObs.subscribe(orders => {
      console.log(orders)
      this.orders = orders;
    })
  }

}
