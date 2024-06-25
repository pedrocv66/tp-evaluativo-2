import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { Route } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
