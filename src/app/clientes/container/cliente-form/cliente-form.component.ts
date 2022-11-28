import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../model/cliente';

import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome: [''],
    email: [''],
    telefone: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    const cliente: Cliente = this.route.snapshot.data['cliente'];
    this.form.setValue(
      {
        _id: cliente._id,
        nome: cliente.nome,
        email: cliente.email,
        telefone: cliente.telefone
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
    this.snackBar.open('Erro ao salvar Cliente. Tente novamente', '', {duration: 5000});
  }
  onSuccess(){
    this.snackBar.open('Cliente salvo com sucesso!', '', {duration: 5000});
    this.location.back();
  }
}
