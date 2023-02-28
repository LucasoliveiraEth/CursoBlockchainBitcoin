import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardService } from 'src/app/services/dashboard.service';
import { PrecoBitcoin } from 'src/app/models/PrecoBitcoin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public precoBitcoin : PrecoBitcoin = new PrecoBitcoin();
  public titulo: string = "preço Bitcoin: ";
  constructor(private service: DashboardService){}

  ngOnInit(): void {
    this.service.get()
    .subscribe(
      response => {
        this.precoBitcoin = response
      })
  }
}
