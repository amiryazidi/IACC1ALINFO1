import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private ps:ProductService, private c:CalculService) { }
   priceMax!:number
  listProduct:Product[]=[]
  alert!:number

  ngOnInit(){
    this.listProduct=this.ps.listProduct
    this.alert=this.c.stat(this.listProduct,'quantity',10)
  }

  increment(i:number){
    
    this.listProduct[i].nbrLike++;
  }

  buy(i:number){
    this.listProduct[i].quantity--;
  }

}
