import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  form = this.formBuilder.group({
    nome: [''],
    email: [''],
    telefone: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClientesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) { 
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
    this.snackBar.open('Erro ao salvar Cliente. Tente novamente', '', {duration: 5000});
  }
  onSuccess(){
    this.snackBar.open('Cliente salvo com sucesso!', '', {duration: 5000});
    this.location.back();
  }
}
