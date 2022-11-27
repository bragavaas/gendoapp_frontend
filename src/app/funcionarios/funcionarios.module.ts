import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './containers/funcionarios/funcionarios.component';
import { FuncionarioFormComponent } from './containers/funcionario-form/funcionario-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FuncionariosListComponent } from './components/funcionarios-list/funcionarios-list.component';


@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioFormComponent,
    FuncionariosListComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FuncionariosModule { }
