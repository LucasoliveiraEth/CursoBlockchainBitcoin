import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7248/User';

  constructor(private http: HttpClient) { }

  profile(userCode : string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/profile?userCode=" + userCode);
  }
}
