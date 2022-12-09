import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {

  isButtonClicked=false
  productName=""
  searchData:any=[]
  constructor(private api:ApiService){}
  
  readValue=()=>{
    let data = {"productName":this.productName}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("No result")
        }
        else{
          this.searchData=response
        }
      }
    )
  }

}
