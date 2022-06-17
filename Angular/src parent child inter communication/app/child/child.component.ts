import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  //parent to child
  @Input() public mygift:any;

  //child to parent 
  @Output() public Action=new EventEmitter();

  public gifttoparent="Child first payment gift to parent";

  public parentgift()
  {
    this.Action.emit(this.gifttoparent);
  }
}
