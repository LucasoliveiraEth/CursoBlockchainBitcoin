import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit{

  constructor(private router: Router){}
  ngOnInit(): void {
    const usuariologado = localStorage.getItem('usuario');
    if(usuariologado != "usuariologado")
    {
      this.router.navigate(['/login/userlogin']);
    }

  }
  showMenu() :boolean
  {
    return this.router.url != '/login/userlogin' &&
           this.router.url != '/login/register';

  }
}
