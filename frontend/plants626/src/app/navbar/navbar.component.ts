import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;

    if(element.offsetParent === null){
      console.log('not visible')
    }
  }

}