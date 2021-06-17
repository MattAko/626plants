import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/CartService.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
})
export class ShippingFormComponent implements OnInit {
  form: FormGroup;
  @Output('formComplete') formComplete = new EventEmitter<boolean>();

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      carrier: new FormControl('usps', [Validators.required]),
      method: new FormControl('two-day', [Validators.required]),
      signature: new FormControl('false', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.form);
    
  
    // Add shipping information
    const { carrier, method, signature } = this.form.value;
    const signatureBool = signature === 'true' ? true : false;
    this.cartService.AddShipping(carrier, method, signatureBool);
    this.formComplete.emit(true);
  }
}
