import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-mars-photo',
  templateUrl: './mars-photo.component.html',
  styleUrls: ['./mars-photo.component.css']
})
export class MarsPhotoComponent implements OnInit {
  rover: any;
  marsPhoto: any;

  constructor(private fetch_data: FetchDataService, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if(params['rover'] == null){
        this.rover="curiosity";
        this.fetch_data.fetch_mars_photo("curiosity").subscribe((result)=>{
          this.marsPhoto = result.photos;
        })
      }else{
        this.rover = params['rover'];
      }
    });
  }

  ngOnInit(): void {
    this.fetch_data.fetch_mars_photo(this.rover).subscribe((result)=>{
      this.marsPhoto = result.photos;
    })
  }
}
