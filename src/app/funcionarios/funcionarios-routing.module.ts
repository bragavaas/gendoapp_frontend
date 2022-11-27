import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioFormComponent } from './containers/funcionario-form/funcionario-form.component';
import { FuncionariosComponent } from './containers/funcionarios/funcionarios.component';

const routes: Routes = [
  { path: '', component: FuncionariosComponent },
  { path: 'create', component: FuncionarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
