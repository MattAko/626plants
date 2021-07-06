import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProduct } from '../../../shared/admin-product.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input('item') item: AdminProduct;
  status: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.item.status==='oos' || this.item.sold){
      this.status = 'Out of Stock';
    }
    else if(this.item.status==='reserved'){
      this.status = 'Reserved';
    }
    else{
      this.status = 'In Stock';
    }
  }

  onEdit(){
    window.scroll(0,0)
    this.router.navigate(['/manage/view', this.item.id, 'edit'])
  }

  openLink(){
    window.open(`https://626plants.com/shop/${this.item.id}`);
  }
}
