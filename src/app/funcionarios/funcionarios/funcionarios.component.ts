import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Funcionario } from '../model/funcionario';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios$: Observable<Funcionario[]>;
  displayedColumns = ['nome', 'expediente', 'observacoes'];

  constructor(private funcionariosService: FuncionariosService ) {
    this.funcionarios$ = this.funcionariosService.list();
  }
  

  ngOnInit(): void {
  }

}

