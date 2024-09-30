import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComponentComponent } from '';
import { CardComponent } from './component/card/card.component';


@NgModule({
  declarations: [
    InicioComponent,
    ComponentComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports:[InicioComponent],
    
  
})
export class InicioModule { }
