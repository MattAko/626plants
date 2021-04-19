import {
  Component,
  ElementRef,
  Host,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private md = 768;

  mobileNavEnabled: boolean;
  innerWidth: any;
  loggedIn = false;
  loggedInSubscription: Subscription;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.mobileNavEnabled = this.innerWidth <= this.md;
  }

  constructor(private authService: AuthService, private elRef: ElementRef) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.loggedInSubscription = this.authService.user.subscribe((user) => {
      if(user){
        this.loggedIn = true;
      }else {
        this.loggedIn = false;
      }
    })
    this.innerWidth = window.innerWidth;
    this.mobileNavEnabled = this.innerWidth <= this.md;
  }
  
  ngOnDestroy(){
    this.loggedInSubscription.unsubscribe();
  }
}
