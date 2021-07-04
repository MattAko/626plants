import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/Product.model';
import { ManagementService } from '../../management.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {
  @Input('id') reservationId: string;
  @Input('status') statusCode: number;
  status: string;
  isFormEnabled: boolean = false;

  form: FormGroup;

  constructor(private manage: ManagementService) { }

  ngOnInit(): void {

    // Convert Status Code to readable string
    switch(this.statusCode){
      case 0: 
        this.status = 'Response Needed';
        break;
      case 1:
        this.status = 'Replied';
        break;
      case 2:
        this.status = 'Confirmed Pickup';
        break;
      case 3: 
        this.status = 'Complete';
        break;
      case 10:
        this.status = 'Cancelled';
        break;
      default:
        this.status = 'Error';
        break;
    }

    // Initialize FormGroup
    this.initForm()
  }

  private initForm(): void{
    this.form = new FormGroup({
      statusControl: new FormControl(this.statusCode, [Validators.required])
    })
  }

  // If form is valid, update reservation status
  onSubmit(){
    if(this.form.valid){
      this.manage.updateReservation(this.reservationId, this.form.value.statusControl);
    }
  }

  // Update reservation status to 10 (Status code for cancelled)
  cancelReservation(){
    this
    this.manage.updateReservation(this.reservationId, 10)
  }

}
