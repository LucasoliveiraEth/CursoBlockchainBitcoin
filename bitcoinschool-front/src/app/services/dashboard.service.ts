import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrecoBitcoin } from '../models/PrecoBitcoin';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends  ApiService {

  get() : Observable<PrecoBitcoin>
  {
    return this.getAll("/ticker");
  }
}
