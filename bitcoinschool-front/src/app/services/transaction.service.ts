import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionRequest } from 'src/models/TransactionRequest';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'https://localhost:7268/Transactions';

  constructor(private http: HttpClient) { }

  create(transactionRequest : TransactionRequest) {
    return this.http.post(this.apiUrl + "/create", transactionRequest);
  }
}
