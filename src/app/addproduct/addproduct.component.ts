import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
Form= new FormGroup({
id:new FormControl('',[Validators.required,Validators.min(0)]),
title:new FormControl('',[Validators.required,Validators.minLength(5)]),
price:new FormControl('',Validators.required),
quantity:new FormControl('',[Validators.required,Validators.min(0)]),
nbrLike:new FormControl('',[Validators.required,Validators.min(0)]),

})
save(){

}
}