import { keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { sanitizeIdentifier } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminProduct } from '../../shared/admin-product.model';
import { UploadForm } from '../../shared/upload-form.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  fileList: FileList = null;
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
      if(this.product != this.manage.getProduct(params['id'])){
        this.product = this.manage.getProduct(params['id']);
        console.log(this.product)
        this.initForm()
      }
    });
  }

  /*
   * Create the form reactively, all inputs required except images.
   * Images not required here because we are editing the form,
   * afaik, I cannot preload the input with a fileUrl
   */
  private initForm() {
    this.editForm = new FormGroup({
      name: new FormControl(this.product.name, [Validators.required]),
      description: new FormControl(this.product.description, [
        Validators.required,
      ]),
      price: new FormControl(this.product.price, [Validators.required]),
      quantity: new FormControl(this.product.quantity, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      visible: new FormControl(this.product.visible, [Validators.required]),
      images: new FormControl(null),
    });
  }

  /*
   * Check for any changes, if changes were made, http put request will be made.
   * Note: We cannot grab the FileList through Angular controls, so we manually had
   *    to do that.
   */
  onSubmit() {
    let changes = {};
    let edited = false;
    for(let control in this.editForm.controls){
      if(!this.editForm.controls[control].pristine){
        changes[control] = this.editForm.controls[control].value;
        edited = true;
      }
    }
    if(this.fileList){
      edited = true
      changes['images'] = this.fileList
    }
    if(edited){
      this.manage.editProduct(changes, this.product.id);
    } 
    else{
      console.log('No changes were made')
    }
    
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

  onDelete(){
    if(confirm(`Are you sure you want to delete ${this.product.name}?\nID: ${this.product.id}`)){
      this.manage.deleteProduct(this.product.id);
    }
  }
}
