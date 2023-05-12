import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletRequest } from 'src/models/WalletRequest';
import { Wallet } from 'src/models/Wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'https://localhost:7248/Wallet/create';

  constructor(private http: HttpClient) { }

  create(walletRequest: WalletRequest): Observable<Wallet> {
    return this.http.post<Wallet>(this.apiUrl, walletRequest);
  }
}
