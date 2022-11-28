import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../../model/funcionario';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css']
})
export class FuncionariosListComponent implements OnInit {

  readonly displayedColumns = ['nome', 'expediente', 'observacoes', 'acoes'];

  @Input() funcionarios: Funcionario[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
  }
  onEdit(funcionario: Funcionario) {
    this.edit.emit(funcionario);
  }
}
