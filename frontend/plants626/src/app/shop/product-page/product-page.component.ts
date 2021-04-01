import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/Product.model';
import { ShopService } from '../ShopService.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private shopSerivce: ShopService) { }

  ngOnInit(): void {
    this.shopSerivce.fetchShop();
    this.route.params.subscribe((params: Params) => {
      this.shopSerivce.setLatestProduct(+params['id']);
      this.subscription = this.shopSerivce.productUpdated.subscribe(
        (product: Product) => {
          this.product = product;
        }
      )
    })
  }

}
