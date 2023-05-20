import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioNegociosPageRoutingModule } from './inicio-negocios-routing.module';

import { InicioNegociosPage } from './inicio-negocios.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    InicioNegociosPageRoutingModule
  ],
  declarations: [InicioNegociosPage]
})
export class InicioNegociosPageModule {}
