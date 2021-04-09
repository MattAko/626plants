import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './manage/upload/upload.component';
import { ReceiptsComponent } from './manage/receipts/receipts.component';
import { ViewComponent } from './manage/view/view.component';
import { EditComponent } from './manage/edit/edit.component';
import { EditStartComponent } from './manage/edit/edit-start/edit-start.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ManageComponent,
    UploadComponent,
    ReceiptsComponent,
    ViewComponent,
    EditComponent,
    EditStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
