import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes$: Observable<Cliente[]>;

  constructor(
    private clienteService: ClientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.clientes$ = this.clienteService.list()
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

  onAdd(){
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  onEdit(cliente: Cliente) {
    this.router.navigate(['edit', cliente._id], {relativeTo: this.route});
  }

}
