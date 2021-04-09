import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  loggedInSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      if(user){
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false; 
      }
    })
  }

  onLogout(){
    this.authService.logout();
  }
}
