import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ServicosListComponent } from './components/servicos-list/servicos-list.component';
import { ServicoFormComponent } from './containers/servico-form/servico-form.component';
import { ServicosComponent } from './containers/servicos/servicos.component';
import { ServicosRoutingModule } from './servicos-routing.module';

@NgModule({
  declarations: [
    ServicosComponent,
    ServicoFormComponent,
    ServicosListComponent
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
