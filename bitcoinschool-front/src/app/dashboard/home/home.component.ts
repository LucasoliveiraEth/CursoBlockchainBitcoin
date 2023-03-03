import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardService } from 'src/app/services/dashboard.service';
import { PrecoBitcoin } from 'src/app/models/PrecoBitcoin';
import { TickerList } from 'src/app/models/TickerList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public precoBitcoin : PrecoBitcoin = new PrecoBitcoin();
  public titulo: string = "preço Bitcoin: ";
  public listaTicker: Array<TickerList> = [
    new TickerList(), { Nome: "Bitcoin", Valor: 15.155 },
    new TickerList(), { Nome: "Ethereum", Valor: 8.956 },
    new TickerList(), { Nome: "Litecoin", Valor: 450.57 },
  ];

  constructor(private service: DashboardService){}

  ngOnInit(): void {
    /*this.service.get()
    .subscribe(
      response => {
        this.precoBitcoin = response
      })*/
  }
}
