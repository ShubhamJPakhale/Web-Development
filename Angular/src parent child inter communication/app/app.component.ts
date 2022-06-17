import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleAngularApp';

  public gift="this is your birthday gift....";

  public giftfromchild:any;
}
