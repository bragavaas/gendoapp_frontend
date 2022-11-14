import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: FuncionariosService,
    private snackBar: MatSnackBar,
    private location: Location
  ) { 
    this.form = this.formBuilder.group({
      nome: [null],
      celular: [null],
      email: [null],
      cpf: [null],
      expediente: [null],
      observacoes: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError())
  }
  onCancel(){
    this.location.back();
  }
  onError(){
    this.snackBar.open('Erro ao salvar Funcionário. Tente novamente', '', {duration: 5000});
  }
  onSuccess(){
    this.snackBar.open('Funcionário salvo com sucesso!', '', {duration: 5000});
    this.location.back();
  }
}
