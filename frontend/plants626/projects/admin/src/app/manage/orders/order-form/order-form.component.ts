import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/shared/Order.model';
import { AdminProduct } from '../../../shared/admin-product.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  formEnabled: boolean = false;
  @Input('order') order: Order;
  form: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }
  
  private initForm(){
    this.form = new FormGroup({
      status: new FormControl(this.order.status, [Validators.required])
    })
  }

  EnableForm(){
    this.formEnabled = true;
  }

}
