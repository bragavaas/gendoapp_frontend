import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from '../../model/funcionario';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome: [''],
    celular: [''],
    email: [''],
    cpf: [''],
    expediente: [''],
    observacoes: ['']
  });
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: FuncionariosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    const funcionario: Funcionario = this.route.snapshot.data['funcionario'];
    this.form.setValue(
      {
        _id: funcionario._id,
        nome: funcionario.nome,
        celular: funcionario.celular,
        email: funcionario.email,
        cpf: funcionario.cpf,
        expediente: funcionario.expediente,
        observacoes: funcionario.expediente
      }
    )
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
