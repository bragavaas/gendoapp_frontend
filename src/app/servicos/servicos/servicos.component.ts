import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Servico } from '../model/servico';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicosService } from '../services/servicos.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  servicos$: Observable<Servico[]>;
  displayedColumns = ['nome_do_servico', 'duracao_do_atendimento', 'valor_servico', 'acoes'];

  constructor(
    private servicoService: ServicosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.servicos$ = this.servicoService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao Carregar Serviços');
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

  onAdd(){
    this.router.navigate(['create'], {relativeTo: this.route});
  }
  onEdit(servico: Servico){
    this.edit.emit(servico);
  }

}
