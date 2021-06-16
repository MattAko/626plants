import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../../shared/order.model';

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
    interface httpResponse{
      status: string
    }
    console.log(this.order.receiptId);
    console.log(this.form);
    this.manage.updateStatus(this.form.value.status, this.order.receiptId).subscribe((response: httpResponse) => {
      if(response.status==='OK'){
        this.order.status = this.form.controls.status.value;
        this.formEnabled = false;
        
      }
      else{
        alert(`There was an error updating status for order ${this.order.receiptId}.`)
      }
    });
  }

}
