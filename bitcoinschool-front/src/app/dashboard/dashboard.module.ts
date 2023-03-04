import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { TickerTapeComponent } from './ticker-tape/ticker-tape.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    RouterModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
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
