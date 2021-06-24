import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CartService } from 'src/app/CartService.service';

@Component({
  selector: 'app-pickup-form',
  templateUrl: './pickup-form.component.html',
  styleUrls: ['./pickup-form.component.css'],
})
export class PickupFormComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  /**
   * Form has two steps.
   * 1. Fill out basic info
   *    Basic info: Name, email, phone number
   * 2. User lists available dates
   */
  isBasicInfoCompleted: boolean = false;
  isFormValid: boolean = true;
  isLoading: boolean = false;
  enableOverlay: boolean = false;

  constructor(private http: HttpClient, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  /**
   *  If form is valid, post reservation to /api/pickup
   *  Post request body: {
   *    name: string,
   *    email: string
   *
   *  }
   */
  onSubmit() {
    console.log(this.form.value)
    const { name, email, phone, dates } = this.form.value;
    if (this.form.valid) {
      // Start loading spinner
      this.isLoading = true;

      const reservation = {
        ...this.form.value,
      };
      interface reservationResponse {
        valid: boolean;
      }

      this.cartService.postReservation(name, email, phone, dates)
      .pipe(catchError(this.handleError))
      .subscribe(response => {
        if(response.valid){
          this.isLoading = false;
          this.enableOverlay = true;
          this.form.reset();
          this.cartService.empty();
        }
      })
 
    }
  }

  handleError(error: HttpErrorResponse) {
    // A client-side error
    if (error.status === 400) {
      alert(
        'There was an error processing your reservation. Please refresh and try again.'
      ); 
      return throwError('Improper client-side request was received by backend. Please max changes.')
    }
    return throwError('Backend was unable to handle this request.')
  }

  /**
   * Valid name, email, and phone input fields.
   * Afterwards, advance user to inputting available dates.
   */
  onContinue() {
    const { email, message, name, phone } = this.form.controls;
    if (email.valid && name.valid && phone.valid) {
      this.isBasicInfoCompleted = true;
      this.isFormValid = true;
    } else {
      // Notify user that form is invalid
      this.isFormValid = false;
    }
  }

  onHome(){
    this.router.navigate(['/']);
  }
}
