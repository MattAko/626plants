import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AdminProduct } from '../shared/admin-product.model';
import { UploadForm } from '../shared/upload-form.model';

@Injectable({ providedIn: 'root' })
export class ManagementService {
  shopChanged = new Subject<AdminProduct[]>();
  shop: AdminProduct[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  upload(form: UploadForm) {
    console.log(form);
    let formData: FormData = new FormData();
    let i = 0,
      len = form.imageFiles.length;
    for (i = 0; i < len; i++) {
      formData.append(`images`, form.imageFiles[i], form.imageFiles[i].name);
    }
    formData.append('name', form.name);
    formData.append('price', form.price.toString());
    formData.append('description', form.description);
    formData.append('quantity', form.quantity.toString());
    formData.append('date', form.postedDate.toString());
    this.http
      .post<Text>('/api/admin/upload', formData, {
        headers: new HttpHeaders().set('Accept', 'application/json'),
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  getShop() {
    this.http
      .get<AdminProduct[]>('/api/admin/shop')
      .subscribe((newShop: AdminProduct[]) => {
        this.shopChanged.next(newShop);
        this.shop = newShop;
        console.log(newShop);
      });
  }

  getProduct(id: number): AdminProduct {
    return this.shop.find((item) => {
      return item.id === id;
    });
  }

  /*
   * Http PUT request, data sent as formData.
   * @body: Changes made to the product 
   * @params: Product ID
   */
  editProduct(changes: any, id: number) {
    console.log('Editing product...')
    let formData: FormData = new FormData();
    for(let change in changes){
      if(change==="images"){
        let images = changes[change]
        let len = changes[change].length;
        let i = 0;
        for(i = 0; i < len; i++){
          formData.append(`images`, images[i], images[i].name);
        }
      }
      else{
        formData.append(change, changes[change]);
      }
    }

    return this.http
      .put('/api/admin/edit', formData, {
        headers: new HttpHeaders().set('Accept', 'application/json'),
        params: new HttpParams().set('id', id.toString()),
      })
      
  }

  deleteProduct(id: number){
    this.http.post('/api/admin/delete', {
      id: id
    }).subscribe((res) => {
      console.log(res)
    })
  }
}
