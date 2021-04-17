import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminProduct } from '../../shared/admin-product.model';
import { UploadForm } from '../../shared/upload-form.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, AfterViewInit {
  @ViewChild('form', { static: false }) form: NgForm;
  fileList: FileList;
  fileUrls = null;
  newImages: boolean = false;
  product: AdminProduct;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private manage: ManagementService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.manage.getProduct(params['id']);
      console.log(this.form);
    });
  }

  ngAfterViewInit() {
    if (this.product) {
      this.form.setValue({
        name: this.product.name,
        price: this.product.price,
        quantity: this.product.quantity,
        description: this.product.description,
      });
    }
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
    this.manage.editProduct(uploadForm, this.product.id);
  }

  onLoad(files: FileList) {
    this.fileUrls = [];
    this.fileList = files;
    let i, len;
    for (i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        this.fileUrls.push(reader.result);
      };
    }
    this.newImages = true;
  }
}
