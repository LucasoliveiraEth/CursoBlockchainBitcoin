import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected apiUrl = 'https://localhost:7003'; // URL da sua API

  constructor(private http: HttpClient) {}

  protected httpGet<T>(url: string, headers?: HttpHeaders) {
    return this.http.get<T>(`${this.apiUrl}/${url}`, { headers }).subscribe();
  }

  protected httpPost<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.post<T>(`${this.apiUrl}/${url}`, body, { headers }).subscribe();
  }

  protected httpPut<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.put<T>(`${this.apiUrl}/${url}`, body, { headers }).subscribe();
  }

  protected httpDelete<T>(url: string, headers?: HttpHeaders) {
    return this.http.delete<T>(`${this.apiUrl}/${url}`, { headers }).subscribe();
  }
}
