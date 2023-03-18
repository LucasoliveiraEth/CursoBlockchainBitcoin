import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './dashboard/contact/contact.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user', component : UserComponent ,
    children : [
      { path: 'login', component:  LoginComponent},
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
