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
import { MaterialDesign } from './material/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IsiBeritaComponent } from './utama/berita/isi-berita/isi-berita.component';
import { MatCardModule } from '@angular/material/card';
import { WisataComponent } from './utama/wisata/wisata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BerandaComponent,
    UtamaComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    WisataComponent,
    IsiBeritaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesign,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
