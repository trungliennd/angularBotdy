import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from "./home.component";
import {appRoutes} from "./app.routes";
import {AboutComponent} from "./about.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {UserService} from "./shared/user.service";
import {SignUpComponent} from "./user/sign-up/sign-up.component";

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      SignInComponent
  ],
  imports: [
    BrowserModule, appRoutes, UserService
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
