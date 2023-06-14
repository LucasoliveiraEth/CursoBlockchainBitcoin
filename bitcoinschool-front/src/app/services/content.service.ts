import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentRequest } from 'src/models/ContentRequest';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl = 'https://localhost:7061/Content';

  constructor(private http: HttpClient) { }

  getcontent(userCode : string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/getbyusercode?userCode=" + userCode);
  }

  createcontent(contentRequest : ContentRequest) {
    return this.http.post(this.apiUrl + "/create", contentRequest);
  }
}
