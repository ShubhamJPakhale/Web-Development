import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleAngularApp';

  //put value coming from child in this variable so that parent will use this variable in code
  public childinput:any;

  //parent to child intercommunication
  public parch:any="Hello from parent..";

  //variable for putting child to parent name 
  public chpa2:any;
}
