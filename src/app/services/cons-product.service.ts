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

}
