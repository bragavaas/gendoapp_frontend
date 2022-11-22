import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicosService } from '../services/servicos.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: ServicosService,
    private snackBar: MatSnackBar,
    private location: Location
  ) { 
    this.form = this.formBuilder.group({
      nome_do_servico: [null],
      duracao_do_atendimento: [null],
      valor_servico: [null],
      comissao: [null],
      descricao: [null]
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
    this.snackBar.open('Erro ao salvar Serviço. Tente novamente', '', {duration: 5000});
  }
  onSuccess(){
    this.snackBar.open('Serviço salvo com sucesso!', '', {duration: 5000});
    this.location.back();
  }
}
