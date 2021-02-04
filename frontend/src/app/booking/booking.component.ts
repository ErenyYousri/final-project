import { Component, OnInit } from '@angular/core';
import {BookingService} from 'src/app/booking.service';
import {HttpClient} from '@angular/common/http';

//import {BookingService } from '../booking.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  formData = {
    fname:"",
    lname:"",
    gender: "", 
    country: "", 
    Date_of_flight:"",
  
    type:1
  }
  countries = ['egypt', 'america', 'canda', 'france', 'german', 'koria','china','japan']
  private _user: any;

  constructor(private _formdata:BookingService) { 
    
  }

 
  ngOnInit(): void {}

  Booking(){
   // console.log(this.formData);
       this._formdata.booking(this.formData).subscribe((data: any)=>{
         console.log(data)
        })
        
     }

    //  this._user.register(this.user).subscribe(data=>{
    //   console.log(data)
    // })
        






  
  //   submitMe(register:any){
  //     if(register.valid){
  // console.log(this.formData)
  //     }
  //     else{
  //       console.log('error')
  //     }
  //   }}
  
    }

