import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  //send data from child to parent 
  public str:any;
  @Output() public myevent=new EventEmitter();

  public Sendinfo(value:any)
  {
    this.str=value;
    this.myevent.emit(this.str);
  }

  //child to parent
  public chpa:any="Hello from child";
  @Output() public chpaemit=new EventEmitter();

  public SendChildtoParent()
  {
    this.chpaemit.emit(this.chpa);
  }

  //parent to child
  @Input() public chpa1:any;
}
