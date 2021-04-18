import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProduct } from '../../../shared/admin-product.model';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  @Input('item') item: AdminProduct;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onEdit(){
    window.scroll(0,0)
    this.router.navigate(['/manage/view', this.item.id, 'edit'])
  }
}
