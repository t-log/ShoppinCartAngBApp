import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  name=""
  category=""
  description=""
  price=""

  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"name":this.name,"category":this.category,"description":this.description,"price":this.price,}
    console.log(data);
    
    this.api.addProducts(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success"){
          alert("Product Added Successfully")}
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }

}
