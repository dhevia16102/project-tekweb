import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtamaComponent} from './content/utama.component'
import { BerandaComponent } from './beranda/beranda.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialDesign } from '../material/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { WisataComponent } from './wisata/wisata.component';
import { BeritaComponent } from './berita/berita.component';
import { DukunganComponent } from './dukungan/dukungan.component';
import { Routes } from '@angular/router';
import { IsiBeritaComponent } from './berita/isi-berita/isi-berita.component';

const routes: Routes =[
    {
      path:'beranda',
      component:BerandaComponent
    },
    {
      path:'wisata',
      component:WisataComponent
    },
    {
      path:'berita',
      component:BeritaComponent
    },
    {
      path:'dukungan',
      component:DukunganComponent
    },
    {
      path:'isi-berita',
      component:IsiBeritaComponent
    }
]

@NgModule({
  declarations: [
    BerandaComponent,
    UtamaComponent,
    FooterComponent,
    WisataComponent,
    BeritaComponent,
    DukunganComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialDesign,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class UtamaModule { }
