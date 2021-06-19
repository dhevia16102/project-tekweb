import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtamaModule } from './utama/utama.module';

const routes: Routes = [
{
  path: 'utama',
  loadChildren:()=>import('./utama/utama.module').then(mod=>mod.UtamaModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
