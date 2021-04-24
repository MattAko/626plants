import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'plants626';
  private md = 768;

  mobileNavEnabled: boolean;
  innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.mobileNavEnabled = this.innerWidth <= this.md;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.mobileNavEnabled = this.innerWidth <= this.md;
  }
}
