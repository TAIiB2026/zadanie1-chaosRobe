import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DronKompComponent } from './dron-komp/dron-komp.component';
import {StandaloneKompComponent} from './standalone-komp/standalone-komp.component'
@NgModule({
  declarations: [
    AppComponent,
    DronKompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StandaloneKompComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
