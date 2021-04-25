import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

    console.log(this.innerWidth)
  }
}
