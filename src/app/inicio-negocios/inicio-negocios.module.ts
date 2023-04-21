import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioNegociosPageRoutingModule } from './inicio-negocios-routing.module';

import { InicioNegociosPage } from './inicio-negocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioNegociosPageRoutingModule
  ],
  declarations: [InicioNegociosPage]
})
export class InicioNegociosPageModule {}
