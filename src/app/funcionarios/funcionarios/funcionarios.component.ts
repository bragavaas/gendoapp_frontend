import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../model/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
