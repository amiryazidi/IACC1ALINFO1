import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   priceMax!:number

  listProduct:Product[]=[
    {id:1,title:'Iphone 12',price:1000,quantity:10,nbrLike:0,image:"../../assets/images/iphone.jpg"},
    {id:2,title:'Iphone 11',price:900,quantity:20,nbrLike:0,image:"../../assets/images/iphone.jpg"},
    {id:3,title:'Iphone 10',price:800,quantity:30,nbrLike:0,image:"../../assets/images/iphone.jpg"},
  ]

  increment(i:number){
    this.listProduct[i].nbrLike++;
  }

  buy(i:number){
    this.listProduct[i].quantity--;
  }

}
