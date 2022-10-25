import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

@NgModule({
  declarations: [
    FuncionariosComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class FuncionariosModule { }
