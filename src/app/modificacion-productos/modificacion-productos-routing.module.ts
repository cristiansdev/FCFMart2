import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificacionProductosPage } from './modificacion-productos.page';

const routes: Routes = [
  {
    path: '',
    component: ModificacionProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificacionProductosPageRoutingModule {}
