import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { WindowService } from 'src/app/WindowService.service';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
})
export class ProductImageComponent implements OnInit{
  @Input('images') images: string[];
  selectedImage: number = 0;
  mobile: boolean;

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
    this.mobile = this.windowService.mobileEnabled;
  }

  onImageClick(index: number) {
    this.selectedImage = index;
  }

  onResize(event: Event){
    this.mobile = window.innerWidth <= this.windowService.md;
    console.log('Mobile: ' + this.mobile)
  }
}
