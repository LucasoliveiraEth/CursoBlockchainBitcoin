import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateWalletRequest } from 'src/models/CreateWalletRequest';
import { Wallet } from 'src/models/Wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl = 'https://localhost:7248/Wallet';

  constructor(private http: HttpClient) { }

  create(walletRequest: CreateWalletRequest): Observable<Wallet> {
    return this.http.post<Wallet>(this.apiUrl + "/create", walletRequest);
  }

}
