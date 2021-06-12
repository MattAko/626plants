import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { contactFormModel } from "./contactForm.model";

@Injectable({'providedIn': 'root'})
export class ContactService{
    // Used for loading spinner
    loading: boolean = false; 
    loadingChanged = new Subject<boolean>();

    constructor(private http: HttpClient){ }

    postForm(form: contactFormModel){
        console.log(form);

        // Enable loading spinner, disabled in contact-form
        this.loading = true; 
        this.loadingChanged.next(true);

        return this.http.post('/api/contact', form, {observe: 'response' })
    }
}