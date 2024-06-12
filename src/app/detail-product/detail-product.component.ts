import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsProductService } from '../services/cons-product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!:number
  product!:Product
  constructor(private act: ActivatedRoute,private cons:ConsProductService) { }

  ngOnInit(){
    this.id = this.act.snapshot.params['id'];
    this.cons.GetProductById(this.id).subscribe(
      (data)=>this.product=data,
    )

  }
}
