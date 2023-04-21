import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { BuscadorComponent } from './buscador/buscador.component';
import { NegocioComponent } from './negocio/negocio.component';
import { VendedoresNegociosComponent } from './vendedores-negocios/vendedores-negocios.component';
import { NegocioComponent } from './negocio/negocio.component';

@NgModule({
  declarations: [BuscadorComponent, NegocioComponent, VendedoresNegociosComponent, NegocioComponent],
  imports: [
    IonicModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [
    BuscadorComponent, NegocioComponent
    BuscadorComponent, NegocioComponent, VendedoresNegociosComponent
  ]
})
export class ComponentsModule {}
