import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      carrier: new FormControl('usps', [Validators.required]),
      method: new FormControl('two-day', [Validators.required]),
      signature: new FormControl(false, [Validators.required])
    })
  }

  onSubmit(){
    console.log(this.form)
  }
}
