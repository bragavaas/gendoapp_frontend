import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Servico } from '../model/servico';
import { ServicosService } from '../services/servicos.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoResolver implements Resolve<Servico> {
   
  constructor(private service: ServicosService ){  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Servico> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id']);
    }
    return of({
      _id: '',
      nome_do_servico: '',
      duracao_do_atendimento: 0,
      valor_servico: 0,
      comissao: 0,
      descricao: ''
    });
  }
}
