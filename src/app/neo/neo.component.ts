import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.css']
})
export class NeoComponent implements OnInit {
  neos:any;
  startDate: any;
  eror:any;

  constructor(private fetch_data: FetchDataService, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.startDate = params['start_date'];
    });
  }

  ngOnInit(): void {
    if(this.startDate != null){
      console.log(this.startDate);
      this.fetch_data.fetch_neo(this.startDate).subscribe(
        (result)=>{
          this.neos = result.near_earth_objects[this.startDate];
          console.log(this.neos);
        },
        (error)=>{
          this.eror = error;
          
        }
      )
    }
  }

}
