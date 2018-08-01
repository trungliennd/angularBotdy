import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from "./home.component";
import {appRoutes} from "./app.routes";
import {AboutComponent} from "./about.component";

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent
  ],
  imports: [
    BrowserModule, appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
