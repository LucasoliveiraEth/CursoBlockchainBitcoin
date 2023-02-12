import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Ticker } from 'src/app/models/Ticker';
import { PrecoBitcoin } from 'src/app/models/PrecoBitcoin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public precoBitcoin : PrecoBitcoin = new PrecoBitcoin();

  constructor(private service: DashboardService){}

  public valorBitcoin: number = 0;
  public criptomoeda: string = "";

  ngOnInit(): void {
    this.service.get()
    .subscribe(
      response => {
        this.precoBitcoin = response;
        console.log("Response:" + this.precoBitcoin.ticker.last);
      },
      error => console.log(error)
    )
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
