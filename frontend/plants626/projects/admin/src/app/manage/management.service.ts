import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
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
      .get<AdminProduct[]>('/api/admin/getShop')
      .subscribe((newShop: AdminProduct[]) => {
        this.shopChanged.next(newShop);
        this.shop = newShop;
        console.log(newShop);
      });
  }

  getProduct(id: string): AdminProduct {
    return this.shop.find((item) => {
      return item.id === id;
    });
  }

  editProduct(form: UploadForm, id: string) {
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
      .put<Text>('/api/admin/editProduct', formData, {
        headers: new HttpHeaders().set('Accept', 'application/json'),
        params: new HttpParams().set('id', id),
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
