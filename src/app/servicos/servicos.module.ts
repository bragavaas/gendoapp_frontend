import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos/servicos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicoFormComponent } from './servico-form/servico-form.component';

@NgModule({
  declarations: [
    ServicosComponent,
    ServicoFormComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ServicosModule { }
