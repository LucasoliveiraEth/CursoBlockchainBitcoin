import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentPermissionRequest } from 'src/models/ContentPermissionRequest';
import { ContentRequest } from 'src/models/ContentRequest';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl = 'https://localhost:7061/Content';

  constructor(private http: HttpClient) { }

  get(userCode : string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/getbyusercode?userCode=" + userCode);
  }

  create(contentRequest : ContentRequest) {
    return this.http.post(this.apiUrl + "/create", contentRequest);
  }

  createpermission(contentPermissionRequest : ContentPermissionRequest) {
    return this.http.post(this.apiUrl + "/createpermission", contentPermissionRequest);
  }
}
