import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  readonly displayedColumns = ['nome', 'email', 'telefone', 'acoes'];

  @Input() clientes: Cliente[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onAdd() {
    this.add.emit(true);
  }
  onEdit(cliente: Cliente) {
    this.edit.emit(cliente);
  }
}
