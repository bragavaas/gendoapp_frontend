import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteFormComponent } from './container/cliente-form/cliente-form.component';
import { ClientesComponent } from './container/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'create', component: ClienteFormComponent },
  { path: 'edit/:id', component: ClienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
