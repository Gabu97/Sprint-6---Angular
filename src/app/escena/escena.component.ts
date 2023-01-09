import { Component, OnInit, Input } from '@angular/core';
//import data from '../../../dades.json';

//console.log(data);
//var index = data.map(x=>x.id);
//var image = data.map(x=>x.imgRoute);

/*interface FRASES {
  id: Number;
  text: String;
}*/



@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})



export class EscenaComponent implements OnInit{
 
  @Input() public parentData:any;
 /* TextVisible: FRASES[] = data;
  constructor(){
    this.TextVisible;
  }*/

  currentSentence = 0;

  prev() {
    if (this.currentSentence > 0) {
      this.currentSentence--;
      console.log(this.currentSentence);
    }
    
    
  }
  
  next() {
    if (this.currentSentence < this.parentData.length - 1) {
      this.currentSentence++;
      console.log(this.currentSentence);
    }
  }

constructor(){

}
ngOnInit(): void {
  
}


}

