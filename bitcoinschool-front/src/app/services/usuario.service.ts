import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/Usuarios';
import { BaseService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService{

    create(product: Usuarios): Observable<Usuarios> {
      return this.post<Usuarios>('Usuarios/Create', product);
    }

    /*

    getProduct(id: number): Observable<Product> {
      return this.get<Product>(`products/${id}`);
    }

    updateProduct(product: Product): Observable<Product> {
      return this.put<Product>(`products/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<void> {
      return this.delete<void>(`products/${id}`);
    }
    */

}
