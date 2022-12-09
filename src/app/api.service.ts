import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  
  addUser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/user",dataToSend)
  }
  searchUser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/usersearch",dataToSend)
  }
  addProducts=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  fetchProducts = () =>
  {
    return this.http.get("http://localhost:8080/view")
  }
  searchProduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  getById=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/userbyid",dataToSend)
  }

}
