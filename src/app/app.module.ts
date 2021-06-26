import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerandaComponent } from './utama/beranda/beranda.component';
import { UtamaComponent } from './utama/content/utama.component';
import { FooterComponent } from './utama/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BerandaComponent,
    UtamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
