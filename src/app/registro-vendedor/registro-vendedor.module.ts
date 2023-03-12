import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroVendedorPageRoutingModule } from './registro-vendedor-routing.module';

import { RegistroVendedorPage } from './registro-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroVendedorPageRoutingModule
  ],
  declarations: [RegistroVendedorPage]
})
export class RegistroVendedorPageModule {}
