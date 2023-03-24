import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../models/Usuarios';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends ApiService{

  createuser(usuario : Usuarios)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpPost<Usuarios>("Usuarios/Create", usuario, headers);
  }
}
