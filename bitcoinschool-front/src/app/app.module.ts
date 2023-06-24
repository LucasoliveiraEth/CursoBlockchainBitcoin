import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { NavMenuComponent } from './dashboard/nav-menu/nav-menu.component';
import { HttpClientModule } from '@angular/common/http';

// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './login/user/user.component';
import { RegisterComponent } from './login/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { WalletService } from './services/wallet.service';
import { ImportComponent } from './login/import/import.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { UserService } from './services/user.service';
import { ContentService } from './services/content.service';
import { TransactionService } from './services/transaction.service';
import { ContentComponent } from './dashboard/content/content.component';
import { AddContentComponent } from './dashboard/content/add-content/add-content.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { SafePipe } from 'src/shared/safe.pipe';

registerLocaleData(ptBr);
// **************************************************

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavMenuComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    ImportComponent,
    ProfileComponent,
    ContentComponent,
    AddContentComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    InputMaskModule
  ],
  providers: [
     // ************************************
     { provide: LOCALE_ID, useValue: 'pt' },
     // ************************************
     WalletService,
     UserService,
     ContentService,
     TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
