import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ConsProductService } from '../services/cons-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private ps: ProductService,private cons:ConsProductService,private route:Router) { }

  Form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.min(0)]),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    nbrLike: new FormControl('', [Validators.required, Validators.min(0)]),

  })
  save() {
   // this.ps.AddProduct(this.Form.value as any)
    this.cons.AddProduct(this.Form.value as any).subscribe({
      next:()=>this.route.navigateByUrl('/product'),
      error:(err)=>console.log(err)
  })
  }
}
