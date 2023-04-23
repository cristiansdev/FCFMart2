import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificacionProductosPageRoutingModule } from './modificacion-productos-routing.module';

import { ModificacionProductosPage } from './modificacion-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificacionProductosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModificacionProductosPage]
})
export class ModificacionProductosPageModule {}
