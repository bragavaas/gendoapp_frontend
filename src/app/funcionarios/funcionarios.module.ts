import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';


@NgModule({
  declarations: [
    FuncionariosComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MatTableModule
  ]
})
export class FuncionariosModule { }
