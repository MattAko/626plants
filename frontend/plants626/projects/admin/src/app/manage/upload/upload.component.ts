import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadForm } from '../../shared/upload-form.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  @ViewChild('uploadForm') form: NgForm;

  fileList: FileList = null;
  fileUrls = null;
  ready: boolean = false;

  constructor(private manage: ManagementService, private router: Router) {}

  ngOnInit(): void {}

  onLoad(files: FileList) {
    this.fileUrls = [];
    this.ready = false;
    this.fileList = files;
    let i, len;
    for (i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        this.fileUrls.push(reader.result);
      };
    }
    this.ready = true;
  }

  onSubmit() {
    const name = this.form.value['name'];
    const quantity = this.form.value['quantity'];
    const price = this.form.value['price'];
    const description = this.form.value['description'];
    const date = new Date();
    const uploadForm = new UploadForm(
      name,
      quantity,
      price,
      description,
      this.fileList,
      date
    );
    this.manage.upload(uploadForm).subscribe((repsonse) => {
      this.router.navigate(['/manage/shop']);
    });
  }
}
