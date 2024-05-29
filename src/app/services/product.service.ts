import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  listProduct:Product[]=[
    {id:1,title:'Iphone 12',price:1000,quantity:10,nbrLike:0,image:"../../assets/images/iphone.jpg"},
    {id:2,title:'Iphone 11',price:900,quantity:20,nbrLike:0,image:"../../assets/images/iphone.jpg"},
    {id:3,title:'Iphone 10',price:800,quantity:30,nbrLike:0,image:"../../assets/images/iphone.jpg"},
  ]
}
