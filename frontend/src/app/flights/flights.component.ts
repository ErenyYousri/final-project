import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
 
flights :any= [

]
  constructor(private _flights:FlightsService) {
    this.getData()
   }
  ngOnInit(): void {
  }
  getData(){
    this._flights.allData().subscribe(data=>{
      console.log(data.data)
      this.flights = data.data
    })
  }

}
