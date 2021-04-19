import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  onLogout(){
    this.authService.logout();
  }
  
}
