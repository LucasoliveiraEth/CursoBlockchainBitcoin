import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public precoBitcoin : any;
  public balanceBitcoin : any;
  wallet!: string | null;
  user!: string | null;
  carregando: boolean = true;

  constructor(private http: HttpClient,
    private router: Router,
    private walletService: WalletService){}

  ngOnInit(): void {
    this.wallet = localStorage.getItem('wallet');
    this.user = localStorage.getItem('user');

    const walletLogada: string = this.wallet ?? "";

    if(!this.wallet || !this.user)
    {
      this.router.navigate(['/login/user']);
    }

    this.precoBitcoin = this.http.get('https://www.mercadobitcoin.net/api/BTC/ticker')
    .subscribe({
      next: (response) => {
        this.precoBitcoin = response
        this.carregando = false;
      },
      error: (error) => console.log("Ocorreu erro ao obter o ticker: " + error)
    })

    this.walletService.balance(walletLogada)
        .subscribe({
          next: (response) => {
            this.balanceBitcoin = response
            this.carregando = false;
          },
          error: (error) => console.log("Ocorreu erro na requisição:" + error)
        })
  }
}
