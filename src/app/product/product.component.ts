import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsProductService } from '../services/cons-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private ps:ProductService, private c:CalculService,private cons:ConsProductService) { }
   priceMax!:number
  listProduct:Product[]=[]
  alert!:number

  ngOnInit(){
   // this.listProduct=this.ps.listProduct
   this.cons.GetProducts().subscribe({
    next:(data)=>this.listProduct=data,
    error:(err)=>console.log(err),
    complete: ()=> console.log("finish")
   }

   )

    this.alert=this.c.stat(this.listProduct,'quantity',10)
  }

  increment(i:number){
    this.listProduct[i].nbrLike++;
  }

  buy(i:number){
    this.listProduct[i].quantity--;
  }

  supp(i:number){
    this.cons.DeleteProduct(i).subscribe({
      next:()=>this.ngOnInit(),
      error:(err)=>console.log(err)
    })
  }

}
