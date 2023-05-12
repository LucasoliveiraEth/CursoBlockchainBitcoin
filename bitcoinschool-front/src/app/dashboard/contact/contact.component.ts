import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
  constructor(private route: Router) {

  }

  ngOnInit(): void {
    const usuariologado = localStorage.getItem('wallet');

    if(!usuariologado)
    {
      this.route.navigate(['/login/user']);
    }
  }


}
