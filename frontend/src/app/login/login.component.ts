import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
email:"",
password:""


  }
  constructor(private _user:UserService) { 
     //this.reservation()
  }
  ngOnInit(): void {
  }

  reservation(){
    this._user.login(this.user).subscribe(data=>{
      console.log(data)
    })

  }

}
