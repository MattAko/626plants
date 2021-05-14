import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/shared/Order.model';
import { ManagementService } from '../../management.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  formEnabled: boolean = false;
  @Input('order') order: Order;
  form: FormGroup

  constructor(private manage: ManagementService) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.order);
  }
  
  private initForm(){
    this.form = new FormGroup({
      status: new FormControl(this.order.status, [Validators.required])
    })
  }

  EnableForm(){
    this.formEnabled = true;
  }

  onSubmit(){
    this.manage.updateStatus(this.form.value.status)
  }

}
