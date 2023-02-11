import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public precoBitcoin : any;
  constructor(private http: HttpClient){}
  public valorBitcoin: number = 0;
  public criptomoeda: string = "";

  ngOnInit(): void {
    this.precoBitcoin = this.http.get('https://www.mercadobitcoin.net/api/BTC/ticker')
    .subscribe(response => this.precoBitcoin = response)
  }

  addBitcoin()
  {
     this.valorBitcoin++;
  }

  delBitcoin()
  {
    this.valorBitcoin = 0;
  }

  KeyUp(event: any)
  {
    this.criptomoeda = event.target.value;
  }
}
