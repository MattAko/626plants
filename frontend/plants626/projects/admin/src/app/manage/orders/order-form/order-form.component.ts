import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../../shared/order.model';
import { ManagementService } from '../../management.service';

interface httpResponse{
  status: string
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Input('order') order: Order;
  formEnabled: boolean = false;
  form: FormGroup

  constructor(private manage: ManagementService) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.order)
  }
  
  private initForm(){
    this.form = new FormGroup({
      status: new FormControl(this.order.status, [Validators.required])
    })
  }

  ToggleForm(){
    this.formEnabled = !this.formEnabled;
  }

  onSubmit(){
    
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