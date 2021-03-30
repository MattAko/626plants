import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductPageComponent } from './shop/product-page/product-page.component'
const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'shop', component: ShopComponent,
    // children: [
    //   {
    //     path: ':name', component: ProductPageComponent, 
    //   }
    // ]
  },
  {
    path: 'shop/:name', component: ProductPageComponent
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
