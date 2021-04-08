import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('form') loginForm: NgForm;
  errorMessage: string;
  errorSub: Subscription;

  constructor(private authService: AuthService) {
    this.errorSub = this.authService.errorChanged.subscribe((errorMessage) => {
      this.errorMessage = errorMessage;
    })
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.login(
      this.loginForm.form.value['email'],
      this.loginForm.form.value['password']
    );
  }
}
