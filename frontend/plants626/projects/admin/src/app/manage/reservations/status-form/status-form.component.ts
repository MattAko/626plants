import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {
  @Input('status') statusCode: number;
  status: string;
  isFormEnabled: boolean = false;

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {

    // Convert Status Code to readable string
    switch(this.statusCode){
      case 0: 
        this.status = 'Response Needed'
        break;
      case 1:
        this.status = 'Replied'
        break;
      case 2:
        this.status = 'Confirmed Pickup'
        break;
      case 3: 
        this.status = 'Complete'
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
      statusControl: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){

    console.log(this.form.status);
  }

}
