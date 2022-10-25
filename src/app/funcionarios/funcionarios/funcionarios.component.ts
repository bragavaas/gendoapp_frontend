import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../model/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [
    {_id:"1", nome: "André", celular: "21997235420", email: "bragavaas@gmail.com", cpf: "15447565774" , expediente: "SEG A SEX: 8 AS 17h", observacoes: "N/A"},
    {_id:"2", nome: "Lucas", celular: "219972456123", email: "lpiazzi@gmail.com", cpf: "1627482959" , expediente: "SEG A SEX: 8 AS 17h", observacoes: "N/A"},
    {_id:"3", nome: "Tiago", celular: "21983644255", email: "t.carvalho@gmail.com", cpf: "2951723658" , expediente: "SEG A SEX: 8 AS 17h", observacoes: "N/A"},
    {_id:"4", nome: "Denise", celular: "2199867524", email: "dgbrag@gmail.com", cpf: "12745925628" , expediente: "SEG A SEX: 8 AS 17h", observacoes: "N/A"},
    {_id:"5", nome: "Gleisson", celular: "2199327721", email: "gleisson@gmail.com", cpf: "12724824628" , expediente: "SEG A SEX: 8 AS 17h", observacoes: "N/A"},
    {_id:"6", nome: "Roberto", celular: "2197442532", email: "r.alves@gmail.com", cpf: "12828462728" , expediente: "SEG A SEX: 8 AS 17h", observacoes: "N/A"}
  ];
  displayedColumns = ['nome', 'expediente', 'observacoes'];
  constructor() {
  }

  ngOnInit(): void {
  }

}
