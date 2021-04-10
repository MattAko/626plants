import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadForm } from '../shared/upload-form.model';

@Injectable({ providedIn: 'root' })
export class ManagementService {
  constructor(private http: HttpClient) {}

  upload(form: UploadForm) {
    console.log(form);
    let formData: FormData = new FormData();
    let i = 0,
      len = form.imageFiles.length;
    for (i = 0; i < len; i++) {
      formData.append(
        `images`,
        form.imageFiles[i],
        form.imageFiles[i].name
      );
    }
    //formData.append('files', form.imageFiles)
    formData.append('name', form.name);
    formData.append('price', form.price.toString());
    formData.append('description', form.description);
    formData.append('quantity', form.quantity.toString());
    formData.append('date', form.postedDate.toString());

    // {
    //         headers: new HttpHeaders({
    //           'Content-Type': 'multipart/form-data',
    //           'Accept': 'application/json',
    //         }
    this.http
      .post<Text>('/api/admin/upload', formData, {
          headers: new HttpHeaders({'Accept': 'application/json' })
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
