import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public str="Shubham"; 
  
  public name:any;
  public Send(value:any)
  {
    this.name=value;
  }
  
  public FullName:any;

}
