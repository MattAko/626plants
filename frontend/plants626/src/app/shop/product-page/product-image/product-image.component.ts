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
  enlargedImage: number = null;
  mobile: boolean;

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
    this.mobile = this.windowService.mobileEnabled;
    console.log(this.windowService.mobileEnabled);
  }

  /**
   * Enlarge the image that the user clicks on. 
   * @param {number} index The index of the image element. 
   */
  onImageClick(index: number) {
    if(this.mobile){
      if(this.selectedImage===index){
        this.enlargedImage = index;
      }else{
        this.selectedImage = index;
      }
    }
    else{
      this.enlargedImage = index;
    }
  }

  /**
   * Toggles between mobile view and desktop view based on window size.
   * @param {Event} event Window event
   */ 
  onResize(event: Event){
    this.mobile = window.innerWidth <= this.windowService.mobileSize;
    if(this.mobile){
      this.enlargedImage = null;
    }
    console.log('Mobile: ' + this.mobile)
  }
}
