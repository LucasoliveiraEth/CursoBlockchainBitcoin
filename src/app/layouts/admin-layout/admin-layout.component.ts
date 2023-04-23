import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  constructor(private router: Router){}
  showMenu() :boolean
  {
    return this.router.url != '/login/userlogin' &&
           this.router.url != '/login/register';

  }
}
