import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { contactFormModel } from "./contactForm.model";

@Injectable({'providedIn': 'root'})
export class ContactService{

    constructor(private http: HttpClient){ }

    postForm(form: contactFormModel){
        console.log(form);
        return this.http.post('/api/contact', form, {observe: 'response' })
    }
}