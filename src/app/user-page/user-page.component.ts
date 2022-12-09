import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  email=""
  password=""
  searchData:any=[]
  constructor(private api:ApiService,private router:Router){}
  checkValues=()=>{
    let data = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.searchUser(data).subscribe(
      (response:any)=>{
        
        if(response.status=="success"){
          let userId=response.userid;
          console.log(userId);
          // alert("Login Success")
          // this.searchData=response
          // console.log(response)
          localStorage.setItem("userInfo",userId)
          this.router.navigate(['/userprofile'])
        }
        else{
        //  alert("Login Failed!:(")
        alert(response.message)
        }
      }
    )
  }
}
