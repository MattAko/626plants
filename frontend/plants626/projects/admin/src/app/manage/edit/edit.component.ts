import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminProduct } from '../../shared/admin-product.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: AdminProduct;

  constructor(private route: ActivatedRoute, private manage: ManagementService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      this.product = this.manage.getProduct(params['id']);
    })
  }

  onSubmit(){

  }
   onLoad(files){
     console.log('photos loaded')
   }
}
