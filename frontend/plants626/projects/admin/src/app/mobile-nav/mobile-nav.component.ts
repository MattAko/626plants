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
export class MobileNavComponent implements OnInit {
  dropdownVisible: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.dropdownVisible = this.elRef.nativeElement.contains(event.target)
      ? !this.dropdownVisible
      : false;
  }

  constructor(private authService: AuthService, private elRef: ElementRef) {}

  ngOnInit(): void {}

  onLogout() {
    this.authService.logout();
  }
}
