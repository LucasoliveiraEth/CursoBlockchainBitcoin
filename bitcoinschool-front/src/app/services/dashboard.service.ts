import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrecoBitcoin } from '../models/PrecoBitcoin';
import { Ticker } from '../models/Ticker';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  get() : Observable<PrecoBitcoin>
  {
    return this.http.get<PrecoBitcoin>("https://www.mercadobitcoin.net/api/BTC/ticker");
  }
}
