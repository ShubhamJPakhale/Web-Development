import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  template: `
  <h1>Arithmetic Service in angular </h1>
  <h2>Addition of two number :{{addition}}</h2>
  <h2>Substraction of two number :{{substraction}}</h2>
  `
})
export class DemoComponent implements OnInit 
{
  public addition:any;
  public substraction:any;

  constructor(private _obj:ArithmeticService) { }

  ngOnInit(): void 
  {

    this.addition=this._obj.Add(10,11);
    this.substraction=this._obj.Sub(21,9);
  }

}
