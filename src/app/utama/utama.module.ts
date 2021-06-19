import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtamaComponent} from './utama/utama.component'
import { BerandaComponent } from './beranda/beranda.component';



@NgModule({
  declarations: [
    BerandaComponent,
    UtamaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtamaModule { }
