///<reference path="auth/auth.interceptor.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from "./home.component";
import {appRoutes} from "./app.routes";
import {AboutComponent} from "./about.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {UserService} from "./shared/user.service";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {UserComponent} from "./user/user.component";

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      SignInComponent,
      SignUpComponent,
      UserComponent
  ],
  imports: [
    BrowserModule,
      appRoutes,
      FormsModule,
      HttpClientModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule
  ],
  providers: [
      UserService,
      AuthGuard,
      {
          provide : HTTP_INTERCEPTORS,
          useClass : AuthInterceptor,
          multi: true
      }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
