import { Injectable } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { delay, first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API = 'api/funcionarios';
  constructor(private httpClient: HttpClient ) {  }

  list() {
   return this.httpClient.get<Funcionario[]>(this.API)
   .pipe(
    delay(500)
    );
  }
  
  save(record: Partial<Funcionario>){
    return this.httpClient.post<Funcionario>(this.API, record).pipe(first());
  }
}
