import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {
  isExpanded = false;
  public urlImage: string = "https://bitcoinschool.net.br/assets/images/logo-bitcoin-school-144x68.png";

  constructor(private router: Router) {

  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  showMenu() :boolean
  {
    return this.router.url != '/user/login' &&
           this.router.url != '/user/register';

  }
}
