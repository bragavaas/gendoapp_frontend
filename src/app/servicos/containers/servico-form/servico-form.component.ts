import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Servico } from '../../model/servico';
import { ServicosService } from '../../services/servicos.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome_do_servico: [''],
    duracao_do_atendimento: [0],
    valor_servico: [0],
    comissao: [0],
    descricao: ['']
  });
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ServicosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    const servico: Servico = this.route.snapshot.data['servico'];
    this.form.setValue(
      {
        _id: servico._id,
        nome_do_servico: servico.nome_do_servico,
        duracao_do_atendimento: servico.duracao_do_atendimento,
        valor_servico: servico.valor_servico,
        comissao: servico.comissao,
        descricao: servico.descricao
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
    this.snackBar.open('Erro ao salvar Serviço. Tente novamente', '', {duration: 5000});
  }
  onSuccess(){
    this.snackBar.open('Serviço salvo com sucesso!', '', {duration: 5000});
    this.location.back();
  }
}
