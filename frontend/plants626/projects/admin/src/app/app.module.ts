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
import { ReservationsComponent } from './manage/reservations/reservations.component';
import { ShopComponent } from './manage/shop/shop.component';
import { EditComponent } from './manage/edit/edit.component';
import { EditStartComponent } from './manage/edit/edit-start/edit-start.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ShopItemComponent } from './manage/shop/shop-item/shop-item.component';
import { CloseButtonComponent } from './shared/close-button/close-button.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { OrdersComponent } from './manage/orders/orders.component';
import { ToggleButton } from './shared/toggle-button/toggle-button.component';
import { OrderItemComponent } from './manage/orders/order-item/order-item.component';
import { OrderFormComponent } from './manage/orders/order-form/order-form.component';
import { DateTimeAdminPipe } from './shared/DateTime.pipe';
import { ReservationItemComponent } from './manage/reservations/reservation-item/reservation-item.component';
import { StatusFormComponent } from './manage/reservations/status-form/status-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ManageComponent,
    UploadComponent,
    ReservationsComponent,
    ShopComponent,
    EditComponent,
    EditStartComponent,
    ShopItemComponent,
    CloseButtonComponent,
    MobileNavComponent,
    OrdersComponent,
    ToggleButton,
    OrderItemComponent,
    OrderFormComponent,
    DateTimeAdminPipe,
    ReservationItemComponent,
    StatusFormComponent,
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
