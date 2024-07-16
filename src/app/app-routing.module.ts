import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApodComponent } from './apod/apod.component';
import { FlaresComponent } from './flares/flares.component';
import { MarsPhotoComponent } from './mars-photo/mars-photo.component';
import { NasaImagesComponent } from './nasa-images/nasa-images.component';
import { NeoComponent } from './neo/neo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'apod', component: ApodComponent},
  {path: 'apod/:date', component: ApodComponent},
  {path: 'flares', component: FlaresComponent},
  {path: 'flares/:start_date&:end_date', component: FlaresComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'mars_rover_photo', component: MarsPhotoComponent},
  {path: 'nasa_news', component: NasaImagesComponent},
  {path: 'neo', component: NeoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
