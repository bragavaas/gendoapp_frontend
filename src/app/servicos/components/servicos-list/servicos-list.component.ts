import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../../model/servico';

@Component({
  selector: 'app-servicos-list',
  templateUrl: './servicos-list.component.html',
  styleUrls: ['./servicos-list.component.css']
})
export class ServicosListComponent implements OnInit {
  
  displayedColumns = ['nome_do_servico', 'duracao_do_atendimento', 'valor_servico', 'acoes'];
  
  @Input() servicos: Servico[] = [];
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
  onEdit(servico: Servico) {
    this.edit.emit(servico);
  }
}
