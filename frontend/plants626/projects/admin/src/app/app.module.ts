import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ViewItemComponent } from './manage/view/view-item/view-item.component';
import { CloseButtonComponent } from './shared/close-button/close-button.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { OrdersComponent } from './manage/orders/orders.component';

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
    ViewItemComponent,
    CloseButtonComponent,
    MobileNavComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
