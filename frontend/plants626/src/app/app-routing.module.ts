import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
