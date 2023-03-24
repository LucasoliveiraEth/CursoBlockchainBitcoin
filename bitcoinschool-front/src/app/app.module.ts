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
import { LoginComponent } from './user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { UsuarioService } from './services/usuario.service';

registerLocaleData(ptBr);
// **************************************************


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    DashboardService,
    UsuarioService,
    // ************************************
    { provide: LOCALE_ID, useValue: 'pt' },
    // ************************************

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
