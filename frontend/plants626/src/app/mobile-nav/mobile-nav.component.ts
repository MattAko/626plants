import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent {
  @ViewChild('hamburger') hamburgerMenuRef;
  dropdownVisible: boolean = false;

  // Toggle dropdown menu based on whether the user clicks the hamburger menu.
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.dropdownVisible = this.hamburgerMenuRef.nativeElement.contains(event.target) ? !this.dropdownVisible : false;
  }
}
