import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  readonly apodURL = 'https://api.nasa.gov/planetary/apod?api_key=';
  readonly apod_dateURL = 'https://api.nasa.gov/planetary/apod?date=';
  readonly api_key = 'Fs6w1ZabtLFhyd6lb3lcmbwIYQXTfVfSU318enDK';
  readonly flaresURL = 'https://api.nasa.gov/DONKI/FLR?';
  readonly marsPhotoURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
  readonly nasaPhotoURL = 'https://images-api.nasa.gov/search?';
  readonly neoURL = 'https://api.nasa.gov/neo/rest/v1/feed';

  apod: any;
  flares: any;
  marsPhoto: any;
  nasaPhoto:any;
  neo: any;

  constructor(private http: HttpClient) { }

  fetch_apod(date: any):Observable<any> {
    if(date != null){
      this.apod = this.http.get(this.apod_dateURL + date + "&api_key=" + this.api_key);
    }else{
      this.apod = this.http.get(this.apodURL + this.api_key);
    }
    return this.apod;
  }

  fetch_flares(startDate:any, endDate:any):Observable<any> {
    this.flares = this.http.get(this.flaresURL + 'startDate=' + startDate +'&endDate='+ endDate +'&api_key=' + this.api_key);
    return this.flares;
  }

  fetch_mars_photo(rover:any):Observable<any> {
    this.marsPhoto = this.http.get(this.marsPhotoURL + rover + '/photos?sol=10&api_key=' + this.api_key);
    return this.marsPhoto;
  }

  fetch_nasa_photo(description:any,title:any,keywords:any,location:any,photographer:any):Observable<any> {
    this.nasaPhoto = this.http.get(this.nasaPhotoURL+'description='+description+'&title='+title+'&keywords='+keywords+'&location='+location+'&photographer='+photographer);
    return this.nasaPhoto;
  }

  fetch_neo(startDate:any):Observable<any> {
    this.neo = this.http.get(this.neoURL + '?start_date=' + startDate + '&api_key=' + this.api_key);
    return this.neo;
  }
}
