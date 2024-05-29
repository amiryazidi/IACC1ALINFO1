import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  color:string="";

  title: string = 'welcome 1ALINFO1';

  show(){
    alert('bonjour')
  }
}
