import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaProductosPageRoutingModule } from './alta-productos-routing.module';

import { AltaProductosPage } from './alta-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaProductosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AltaProductosPage]
})
export class AltaProductosPageModule {}
