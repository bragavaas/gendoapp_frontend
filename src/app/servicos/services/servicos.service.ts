import { Injectable } from '@angular/core';
import { Servico } from '../model/servico';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private readonly API = '/api/servicos';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Servico[]>(this.API)
    .pipe(
     delay(500)
     );
   }
   
   save(record: Servico){
     return this.httpClient.post<Servico>(this.API, record).pipe(first());
   }
}
