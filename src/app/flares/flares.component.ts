import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-flares',
  templateUrl: './flares.component.html',
  styleUrls: ['./flares.component.css']
})
export class FlaresComponent implements OnInit {
  startDate: any;
  endDate: any;
  flares: any;
  show=false;
  eror: any;
  erorMsg = 'Data not found!';

  constructor(private fetch_data: FetchDataService, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.startDate = params['start_date'];
      this.endDate = params['end_date'];
    });
  }

  ngOnInit(): void {
    if(this.startDate != null && this.endDate!=null){
      this.show=true;
      this.fetch_data.fetch_flares(this.startDate, this.endDate).subscribe(
        (result)=>{
          this.flares = result;
          console.log(result);
        },
        (error)=>{
          this.eror = error;
          
        }
      )
    }
  }

}
