import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './login/user/user.component';
import { RegisterComponent } from './login/register/register.component';
import { ImportComponent } from './login/import/import.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AddContentComponent } from './dashboard/content/add-content/add-content.component';
import { ContentComponent } from './dashboard/content/content.component';

const routes: Routes = [
  {
    path: 'login', component : LoginComponent ,
    children : [
      { path: 'user', component:  UserComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'import', component: ImportComponent }
    ]
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'addcontent', component: AddContentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
