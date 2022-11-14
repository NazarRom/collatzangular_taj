import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public cifra!: number;
  public numbers!:Array<number>;
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      if (parametros['numero'] != null) {
        this.cifra = parseInt(parametros['numero']);
        var aux = [];
        do {
          if (this.cifra % 2==0){
            this.cifra= this.cifra/2
          }else{
            this.cifra = (this.cifra * 3) + 1
          }
          aux.push(this.cifra)
        }while(this.cifra!=1);
        this.numbers = aux;

      }
    });
  }

}
