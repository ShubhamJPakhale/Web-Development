import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleAngularApp';

  //template refrence approach
  public htots:any="Shubham Pakhale";

  public data:any;
  public SendMessage(value:any)
  {
    this.data=value;
  }

  //ngmodel approach
  public databind:any;
}
