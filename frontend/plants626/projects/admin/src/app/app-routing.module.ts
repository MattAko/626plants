import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { EditStartComponent } from './manage/edit/edit-start/edit-start.component';
import { EditComponent } from './manage/edit/edit.component';
import { ManageComponent } from './manage/manage.component';
import { OrdersComponent } from './manage/orders/orders.component';
import { ReservationsComponent } from './manage/reservations/reservations.component';
import { UploadComponent } from './manage/upload/upload.component';
import { ViewComponent } from './manage/view/view.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view'
      },
      {
        path: 'upload',
        component: UploadComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'pickups',
        component: ReservationsComponent
      },
      {
        path: 'view',
        component: ViewComponent,
        children: [
          {
            path: '',
            component: EditStartComponent,
            pathMatch: 'full',
          },
          {
            path: ':id/edit',
            component: EditComponent
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
