import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes = [
  { path: '', component: ServicosComponent },
  { path: 'create', component: ServicoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
