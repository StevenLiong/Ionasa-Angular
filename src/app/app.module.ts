import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';
import { FlaresComponent } from './flares/flares.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MarsPhotoComponent } from './mars-photo/mars-photo.component';
import { NasaImagesComponent } from './nasa-images/nasa-images.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NeoComponent } from './neo/neo.component';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    FlaresComponent,
    AboutusComponent,
    MarsPhotoComponent,
    NasaImagesComponent,
    WelcomeComponent,
    NeoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
