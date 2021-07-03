import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerandaComponent } from './utama/beranda/beranda.component';
import { UtamaComponent } from './utama/content/utama.component';
import { FooterComponent } from './utama/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { PublicComponent } from './public/public.component';
import { MaterialDesign } from './material/material';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BerandaComponent,
    UtamaComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesign,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
