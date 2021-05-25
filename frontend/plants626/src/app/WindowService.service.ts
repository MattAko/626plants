import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/*
 * This service is responsible to determining the window width of the user.
 * Determines if the device is a mobile device and notifies components through 
 *  the innerWidthChanged Subject.
 */

@Injectable({ providedIn: 'root' })
export class WindowService {
  public mobileSize = 1024;

  mobileEnabled: boolean = window.innerWidth <= this.mobileSize;
  private innerWidth: number;
  innerWidthChanged = new Subject<number>();
  displayChanged = new Subject<boolean>();

  @HostListener('resize', ['$event'])
  onResize(event: Event) {
    console.log('resized event')
    this.innerWidth = window.innerWidth;
    this.innerWidthChanged.next(this.innerWidth);
    this.mobileEnabled = this.innerWidth <= this.mobileSize;
    this.displayChanged.next(this.mobileEnabled);
  }
}
