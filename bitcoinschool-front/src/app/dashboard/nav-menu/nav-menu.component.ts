import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private route: Router) {

  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  showMenu() : boolean {
     return this.route.url != "/login/user" && this.route.url != "/login/register";
  }
}
