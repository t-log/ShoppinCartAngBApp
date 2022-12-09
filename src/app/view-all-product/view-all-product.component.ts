import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent {
  productData:any=[]
  constructor(private api:ApiService){
    api.fetchProducts().subscribe(
      (response)=>
      {
      this.productData = response;
      console.log(this.productData);
      
      }
      )
  }
}
