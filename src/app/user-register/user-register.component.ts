import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name=""
  address=""
  phoneNo=""
  email=""
  password=""
  confirmPassword=""

  constructor(private api:ApiService,private router:Router){}
  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phoneNo":this.phoneNo,
    "email":this.email,"password":this.password}
    console.log(data);
    
    this.api.addUser(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success"){
          alert("User Added Successfully")}
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }
}
