import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { UserloginComponent } from './pages/login/userlogin/userlogin.component';
import { RegisterComponent } from './pages/login/register/register.component';

export const AppRoutes: Routes = [
  {
    path: 'login', component : LoginComponent ,
    children : [
      { path: 'userlogin', component:  UserloginComponent},
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
