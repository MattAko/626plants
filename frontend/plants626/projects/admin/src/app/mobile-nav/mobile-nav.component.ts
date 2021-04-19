import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent implements OnInit, OnDestroy {
  loggedIn: boolean = false;
  dropdownVisible: boolean = false;

  private loggedInSubscription: Subscription;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.dropdownVisible = this.elRef.nativeElement.contains(event.target)
      ? !this.dropdownVisible
      : false;
    console.log(this.dropdownVisible);
  }

  constructor(private authService: AuthService, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.loggedInSubscription = this.authService.user.subscribe((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }
}
