import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public numeros:Array<number>;
  constructor() { 
    this.numeros= new Array<number>();
  }

  ngOnInit(): void {
    for(var i = 1;i <= 5;i++){
     var random =  Math.floor(Math.random() * 100 + 1);
     this.numeros.push(random);
     console.log(this.numeros);
    }
  }

}
