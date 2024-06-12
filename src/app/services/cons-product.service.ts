import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsProductService {

  constructor(private http:HttpClient) { }

  GetProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  GetProductById(id:number){
    return this.http.get<Product>('http://localhost:3000/products/'+id)
  }

  AddProduct(p:Product){
    return this.http.post('http://localhost:3000/products',p)
  }

  DeleteProduct(id:number){
    return this.http.delete('http://localhost:3000/products/'+id)
  }
  UpdateProduct(id:number,p:Product){
    return this.http.put('http://localhost:3000/products/'+id,p)
  }

}
