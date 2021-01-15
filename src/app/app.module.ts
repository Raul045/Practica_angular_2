import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePerComponent } from './Componentes/componente-per/componente-per.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ComponentePerComponent]
})
export class AppModule { }
