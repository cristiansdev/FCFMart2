import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioNegociosPage } from './inicio-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: InicioNegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioNegociosPageRoutingModule {}
