import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent {
  constructor(private elRef: ElementRef) {}

  dropdownVisible: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.dropdownVisible = this.elRef.nativeElement.contains(event.target)
      ? !this.dropdownVisible
      : false;
    console.log(this.dropdownVisible);
  }
}
