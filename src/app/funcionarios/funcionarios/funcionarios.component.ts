import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Funcionario } from '../model/funcionario';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios$: Observable<Funcionario[]>;
  displayedColumns = ['nome', 'expediente', 'observacoes', 'acoes'];

  constructor(
    private funcionariosService: FuncionariosService,
    public dialog: MatDialog 
    ) {
    this.funcionarios$ = this.funcionariosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao Carregar Cursos');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  

  ngOnInit(): void {
  }

}

