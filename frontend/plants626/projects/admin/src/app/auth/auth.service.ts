import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService implements OnInit{
    constructor(private http: HttpClient, private router: Router){ }

    ngOnInit(){

    }

    login(email: string, password: string){
        this.http.post('/api/admin/login',{
            email: email,
            password: password 
        }).subscribe((response) => {
            console.log(response);
        })
    }
}