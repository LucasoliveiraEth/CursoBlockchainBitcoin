import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { TickerTapeComponent } from './ticker-tape/ticker-tape.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
   HomeComponent,
   ContactComponent,
   NavMenuComponent,
   FooterComponent,
   TickerTapeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    NavMenuComponent,
    FooterComponent,
    TickerTapeComponent
  ]
})
export class DashboardModule { }
