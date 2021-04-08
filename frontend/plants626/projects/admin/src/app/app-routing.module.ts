import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/manage',
    pathMatch: 'full',
  },
  {
    path: 'manage',
    component: ManageComponent,
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
