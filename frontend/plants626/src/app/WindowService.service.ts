import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/*
 * This service is responsible to determining the window width of the user.
 * Determines if the device is a mobile device and notifies components through 
 *  the innerWidthChanged Subject.
 */

@Injectable({ providedIn: 'root' })
export class WindowService {
  private md = 768;

  mobileEnabled: boolean = window.innerWidth <= this.md;
  private innerWidth: number;
  innerWidthChanged = new Subject<number>();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerWidthChanged.next(this.innerWidth);
    this.mobileEnabled = this.innerWidth <= this.md;
  }
}
