import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected apiUrl = 'https://localhost:7285/';
  protected headers: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  protected request<T>(method: string, url: string, body?: any): Observable<T> {
    const options = { headers: this.headers };
    return this.http.request<T>(method, this.apiUrl + url, {...options, body})
      .pipe(
        catchError(this.handleError)
      );
  }

  protected get<T>(url: string): Observable<T> {
    return this.request<T>('GET', url);
  }

  protected post<T>(url: string, body?: any): Observable<T> {
    return this.request<T>('POST', url, body);
  }

  protected put<T>(url: string, body?: any): Observable<T> {
    return this.request<T>('PUT', url, body);
  }

  protected delete<T>(url: string): Observable<T> {
    return this.request<T>('DELETE', url);
  }
}
