import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelPageComponent } from './wel-page/wel-page.component';
import { SignpageComponent } from './signpage/signpage.component';
import { DetailComponent } from './wel-page/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    WelPageComponent,
    SignpageComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
