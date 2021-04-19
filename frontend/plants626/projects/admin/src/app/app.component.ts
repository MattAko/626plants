import {
  Component,
  ElementRef,
  Host,
  HostListener,
  OnInit,
} from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private md = 768;

  public mobileNavEnabled: boolean;
  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.mobileNavEnabled = this.innerWidth <= this.md;
  }

  constructor(private authService: AuthService, private elRef: ElementRef) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.innerWidth = window.innerWidth;
    this.mobileNavEnabled = this.innerWidth <= this.md;
  }
}
