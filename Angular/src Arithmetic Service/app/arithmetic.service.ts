import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{

  constructor() { }

  public Add(value1:any,value2:any)
  {
    let sum:any;
    sum=value1+value2;
    return sum;
  }

  public Sub(value1:any,value2:any)
  {
    let sub:any;
    if(value1>value2)
    {
      return sub=value1-value2;
      
    }
    else{
      return sub=value2-value1;
    }
  }
}
