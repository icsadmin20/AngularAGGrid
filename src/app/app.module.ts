import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdnanComponent } from './adnan/adnan.component';
import { AkterComponent } from './akter/akter.component';
import { RituComponent } from './ritu/ritu.component';
import { NaimComponent } from './naim/naim.component';
import { SonetComponent } from './sonet/sonet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdnanComponent,
    AkterComponent,
    RituComponent,
    NaimComponent,
    SonetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
