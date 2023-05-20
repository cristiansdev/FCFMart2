import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { BuscadorComponent } from './buscador/buscador.component';
import { NegocioComponent } from './negocio/negocio.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BuscadorComponent, NegocioComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [
    BuscadorComponent, NegocioComponent
  ]
})
export class ComponentsModule {}
