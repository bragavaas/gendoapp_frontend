import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  private readonly API = '/api/clientes';
  constructor(private httpClient: HttpClient) { }
  
  list() {
    return this.httpClient.get<Cliente[]>(this.API)
    .pipe(
      delay(500)
      );
    }
    
    loadByID(id: string) {
      return this.httpClient.get<Cliente>(`${this.API}/${id}`);
    }
    save(record: Partial <Cliente>) {
      return this.httpClient.post<Cliente>(this.API, record).pipe(first());
    }
  }
  