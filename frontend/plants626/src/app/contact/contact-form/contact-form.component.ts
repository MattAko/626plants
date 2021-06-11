import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { contactFormModel } from '../contactForm.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

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
        // Reset form on success
        if (response.status === 200) {
          this.form.reset();
        }
      });
    }
  }
}
