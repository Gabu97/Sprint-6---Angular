import { Component, OnInit } from '@angular/core';
import data from '../../../dades.json';

interface FRASES {
  id: Number;
  text: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  TextVisible: FRASES[] = data;
  
  constructor(){
    this.TextVisible;
    
    console.log(data);
  }

 public showEscena:boolean = false;
 public hero:boolean = false;
public buttonName:any = 'Start';

ngOnInit (){}
toggle() {

  this.showEscena = !this.showEscena;
this.hero = !this.hero;

  // Change the name of the button.
  if(this.showEscena)  
    this.buttonName = "Back";
  else
    this.buttonName = "Start";
}
}








