import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { ToastrModule } from 'ngx-toastr';
import { FooterModule } from './shared/footer/footer.module';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
