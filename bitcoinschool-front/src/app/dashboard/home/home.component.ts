import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public precoBitcoin : any;
  constructor(private http: HttpClient,
    private router: Router){}

  ngOnInit(): void {
    const usuariologado = localStorage.getItem('usuario');
    if(usuariologado != "usuariologado")
    {
      this.router.navigate(['/login/user']);
    }

    this.precoBitcoin = this.http.get('https://www.mercadobitcoin.net/api/BTC/ticker')
    .subscribe(response => this.precoBitcoin = response)
  }
}
