import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  fileList: FileList = null;
  fileUrls: any = null;
  constructor() {}

  ngOnInit(): void {}

  onLoad(files: FileList) {
    let reader = new FileReader();
    this.fileList = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.fileUrls = reader.result;
    }
  }
}
