import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  data: any;
  date: any;
  erorResponse: any;
  erorStatus = false;
  url:any;
  
  constructor(private fetch_data: FetchDataService, private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
    });
  }

  ngOnInit(): void {
    this.fetch_data.fetch_apod(this.date).subscribe(
      (result)=>{
        this.data = result;
        this.url = result.url;
      },(error)=>{
        this.erorResponse = error;
        this.erorStatus = true;
        console.log(this.erorResponse.error.msg);
    })
  }

}
