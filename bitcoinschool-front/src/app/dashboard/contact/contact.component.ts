import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  wallet!: string | null;
  user!: string | null;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.wallet = localStorage.getItem('wallet');
    this.user = localStorage.getItem('user');

    if(!this.wallet || !this.user)
    {
      this.route.navigate(['/login/user']);
    }
  }
}
