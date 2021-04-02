import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
