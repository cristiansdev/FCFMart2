import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedoresNegociosPage } from './vendedores-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: VendedoresNegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedoresNegociosPageRoutingModule {}
