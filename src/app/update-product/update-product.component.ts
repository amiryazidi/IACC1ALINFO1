import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsProductService } from '../services/cons-product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  constructor(private cons:ConsProductService,private route:Router,private Act:ActivatedRoute) { }
  id!:number
  p!:Product
  Form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.min(0)]),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    nbrLike: new FormControl('', [Validators.required, Validators.min(0)]),

  })


  ngOnInit(){
    //1- recuperer l'id depuis l'url
    this.id=this.Act.snapshot.params['id']
    //2- recuperer le produit par id
    this.cons.GetProductById(this.id).subscribe(
        (data)=>{
          this.p=data,
          //3- remplir le formulaire par les données du produit
          this.Form.patchValue(this.p as any)
        }
    )

  }

  update() {
    this.cons.UpdateProduct(this.id,this.Form.value as any).subscribe(
      {
        next:()=>this.route.navigateByUrl('/product'),
        error:(err)=>console.log(err)
      }
    )
  }

}
