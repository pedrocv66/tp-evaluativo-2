import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NadvarComponent } from './components/nadvar/nadvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NadvarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NadvarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
