import { Injectable } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { delay } from 'rxjs';


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
}
