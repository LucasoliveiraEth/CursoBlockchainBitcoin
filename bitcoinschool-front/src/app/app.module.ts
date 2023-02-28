import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { ApiService } from './services/api.service';

// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DashboardService } from './services/dashboard.service';
import { LoginComponent } from './login/login/login.component';

registerLocaleData(ptBr);
// **************************************************


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    ApiService,
    DashboardService,
    // ************************************
    { provide: LOCALE_ID, useValue: 'pt' },
    // ************************************

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
