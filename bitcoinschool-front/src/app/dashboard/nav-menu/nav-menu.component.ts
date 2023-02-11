import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {
  isExpanded = false;
  public urlImage: string = "https://bitcoinschool.net.br/assets/images/logo-bitcoin-school-144x68.png";

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
