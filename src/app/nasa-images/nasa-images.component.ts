import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-nasa-images',
  templateUrl: './nasa-images.component.html',
  styleUrls: ['./nasa-images.component.css']
})
export class NasaImagesComponent implements OnInit {
  description: any;
  title: any;
  keywords:any;
  location: any;
  photographer: any;
  nasaPhotos: any;
  cek=1;

  constructor(private fetch_data: FetchDataService, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if(params['description'] == null && params['title'] == null && params['keywords'] == null && params['location'] == null && params['photographer'] == null){
        // default view
        this.description = 'nasa';
        this.title = '';
        this.keywords = '';
        this.location = '';
        this.photographer = '';
        this.fetch_data.fetch_nasa_photo(this.description, this.title, this.keywords, this.location, this.photographer).subscribe((result)=>{
          this.cek = result.collection.metadata.total_hits;
          this.nasaPhotos = result.collection.items;
        })
      }else{
        // search view
        this.description = params['description'];
        this.title = params['title'];
        this.keywords = params['keywords'];
        this.location = params['location'];
        this.photographer = params['photographer'];
      }
    });
  }

  ngOnInit(): void {
    if(this.description!=null||this.title!=null||this.keywords!=null||this.location!=null||this.photographer!=null){
      this.fetch_data.fetch_nasa_photo(this.description, this.title, this.keywords, this.location, this.photographer).subscribe((result)=>{
        this.cek = result.collection.metadata.total_hits;
        this.nasaPhotos = result.collection.items;
        console.log(this.nasaPhotos);
      })
    }
  }

}
