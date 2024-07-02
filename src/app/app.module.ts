import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './modules/inicio/pages/inicio/shared/shared.component';
import { PagesComponent } from './modules/inicio/producto/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
