import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { ClienteFormComponent } from './container/cliente-form/cliente-form.component';
import { ClientesComponent } from './container/clientes/clientes.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteFormComponent,
    ClientesListComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
