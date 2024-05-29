import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  login=new FormControl('',Validators.required)
  pwd=new FormControl('', Validators.required)


  Form=new FormGroup({
    login:new FormControl('',[Validators.required,Validators.minLength(4)]),
    pwd:new FormControl('',Validators.required),
    cin:new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
    email:new FormControl('',[Validators.required,Validators.email]),

  })

  save(){
    console.log(this.login)
  }
}
