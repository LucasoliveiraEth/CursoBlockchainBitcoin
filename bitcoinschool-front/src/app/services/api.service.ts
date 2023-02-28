import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = "http://localhost:3000";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
   /**
   * Write code on Method
   *
   * @return response()
   */
   getAll(endpoint:string): Observable<any> {

    return this.httpClient.get(this.apiURL + endpoint)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(post:any, endpoint:string): Observable<any> {

    return this.httpClient.post(this.apiURL + endpoint, JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number, endpoint:string): Observable<any> {

    return this.httpClient.get(this.apiURL + endpoint + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, post:any, endpoint: string): Observable<any> {

    return this.httpClient.put(this.apiURL + endpoint + id, JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number, endpoint:string){
    return this.httpClient.delete(this.apiURL + endpoint + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => Error(errorMessage));
 }
}
