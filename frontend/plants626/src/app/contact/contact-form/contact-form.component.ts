import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactService } from '../contact.service';
import { contactFormModel } from '../contactForm.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit, OnDestroy {

  // For loading spinner;
  loading: boolean;
  loadingSub: Subscription;
  
  @ViewChild('f') form: NgForm;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {

    // Set up loading subscription
    this.loading = this.contactService.loading;
    this.loadingSub = this.contactService.loadingChanged.subscribe(val => {
      this.loading = val;
    })
  }

  /**
   *
   */
  onSubmit() {
    // Check if form is valid
    if (this.form.valid) {
      const { company, phone, name, email, message } = this.form.value;
      const formData: contactFormModel = {
        name,
        phone,
        company,
        email,
        message,
      };

      // Post form
      this.contactService.postForm(formData).subscribe((response) => {

        // Disable loading spinner
        this.contactService.loadingChanged.next(false);

        // Reset form on success
        if (response.status === 200) {
          this.form.reset();
        }
      });
    }
  }

  ngOnDestroy(){
    this.loadingSub.unsubscribe();
  }
}
