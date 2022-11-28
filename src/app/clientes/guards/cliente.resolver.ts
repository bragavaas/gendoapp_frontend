import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Cliente } from '../model/cliente';
import { ClientesService } from '../services/clientes.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteResolver implements Resolve<Cliente> {
  
  constructor(private service: ClientesService ){  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> {
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id']);
    }
    return of({
      _id: '',
      nome: '',
      email: '',
      telefone: ''
    });
  }
}
