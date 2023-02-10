import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TickerTapeComponent } from './ticker-tape/ticker-tape.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    TickerTapeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavMenuComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    TickerTapeComponent
  ]
})
export class DashboardModule { }
