import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class BrokerService extends BaseService {
  private endpoint = 'products';

  getAllProducts(): Observable<any> {
    return this.httpGet<any>(this.endpoint);
  }

  getProductById(id: number): Observable<any> {
    return this.httpGet<any>(`${this.endpoint}/${id}`);
  }

  createProduct(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpPost<any>(this.endpoint, data, { headers });
  }

  updateProduct(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpPut<any>(`${this.endpoint}/${id}`, data, { headers });
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpDelete<any>(`${this.endpoint}/${id}`);
  }
}
