import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseService {
  protected apiUrl = 'https://api.example.com'; // URL da sua API

  constructor(private http: HttpClient) {}

  protected httpGet<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${url}`, { headers });
  }

  protected httpPost<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${url}`, body, { headers });
  }

  protected httpPut<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${url}`, body, { headers });
  }

  protected httpDelete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${url}`, { headers });
  }
}
