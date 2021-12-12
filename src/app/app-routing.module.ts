import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdnanComponent } from './adnan/adnan.component';
import { AkterComponent } from './akter/akter.component';
import { HomeComponent } from './home/home.component';
import { NaimComponent } from './naim/naim.component';
import { RituComponent } from './ritu/ritu.component';
import { SonetComponent } from './sonet/sonet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adnan', component: AdnanComponent },
  { path: 'ritu', component: RituComponent },
  { path: 'akter', component: AkterComponent },
  { path: 'naim', component: NaimComponent },
  { path: 'sonet', component: SonetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
