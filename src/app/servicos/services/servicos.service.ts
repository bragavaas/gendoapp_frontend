import { Injectable } from '@angular/core';
import { Servico } from '../model/servico';
import { HttpClient } from '@angular/common/http';
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

   loadByID(id: string) {
    return this.httpClient.get<Servico>(`${this.API}/${id}`);
   }
   
   save(record: Partial<Servico>){
     return this.httpClient.post<Servico>(this.API, record).pipe(first());
   }
}
