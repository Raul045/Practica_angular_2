import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ComponentePerComponent]
})
export class AppModule { }
