import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileRequest } from 'src/models/ProfileRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7248/User';

  constructor(private http: HttpClient) { }

  getprofile(userCode : string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/profile?userCode=" + userCode);
  }

  updateprofile(profileRequest : ProfileRequest) {
    return this.http.put(this.apiUrl + "/updateprofile", profileRequest);
  }
}
