import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { ProductPageComponent } from './shop/product-page/product-page.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { CloseButtonComponent } from './shared/close-button/close-button.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';
import { ShippingFormComponent } from './cart/shipping-form/shipping-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { PhonePipe } from 'projects/admin/src/app/shared/phone.pipe';
import { DateTimePipe } from './shared/DateTime.pipe';
import { PickupComponent } from './pickup/pickup.component';
import { PickupFormComponent } from './pickup/pickup-form/pickup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaypalButtonComponent,
    HomeComponent,
    ShopComponent,
    FaqComponent,
    ContactComponent,
    CartComponent,
    CartListComponent,
    FooterComponent,
    ShopItemComponent,
    ProductPageComponent,
    MobileNavComponent,
    CloseButtonComponent,
    CheckoutComponent,
    LoadingSpinnerComponent,
    ConfirmationComponent,
    TooltipComponent,
    ShippingFormComponent,
    ContactFormComponent,
    PhonePipe,
    DateTimePipe,
    PickupComponent,
    PickupFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
