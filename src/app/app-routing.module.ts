import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BerandaComponent } from './utama/beranda/beranda.component';
import { BeritaComponent } from './utama/berita/berita.component';
import { IsiBeritaComponent } from './utama/berita/isi-berita/isi-berita.component';
import { DukunganComponent } from './utama/dukungan/dukungan.component';
import { WisataComponent } from './utama/wisata/wisata.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/beranda',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path:'public',
    loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule)
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
