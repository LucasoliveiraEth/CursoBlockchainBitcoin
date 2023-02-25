import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { NavMenuComponent } from './dashboard/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
// **************************************************

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent },
    ])

  ],
  providers: [
     // ************************************
     { provide: LOCALE_ID, useValue: 'pt' },
     // ************************************
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
