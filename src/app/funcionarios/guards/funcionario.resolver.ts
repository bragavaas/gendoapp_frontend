import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Funcionario } from '../model/funcionario';
import { FuncionariosService } from '../services/funcionarios.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioResolver implements Resolve<Funcionario> {
  constructor(private service: FuncionariosService ){  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Funcionario> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id']);
    }
    return of({
      _id: '',
      nome: '',
      celular: '',
      email: '',
      cpf: '',
      expediente: '',
      observacoes: ''
    });
  }
}
