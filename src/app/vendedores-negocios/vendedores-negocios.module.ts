import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedoresNegociosPageRoutingModule } from './vendedores-negocios-routing.module';

import { VendedoresNegociosPage } from './vendedores-negocios.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    VendedoresNegociosPageRoutingModule
  ],
  declarations: [VendedoresNegociosPage]
})
export class VendedoresNegociosPageModule {}
