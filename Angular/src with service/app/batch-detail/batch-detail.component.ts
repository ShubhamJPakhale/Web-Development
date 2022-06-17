import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../batch-service.service';

@Component({
  selector: 'app-batch-detail',
  template: `
  <h2>Batch Detail :- </h2>
  <ul *ngFor="let items of Batches">
    <li>{{items.Name}} :-  fee {{items.Fees}} and duration is {{items.Duration}} Month</li>
  </ul>
  `
})
export class BatchDetailComponent implements OnInit 
{
  public Batches:any=[];

  constructor(private _obj:BatchServiceService) 
  { 

  }

  ngOnInit(): void 
  {
    this.Batches=this._obj.GetBatches().subscribe(data => this.Batches = data);// to get data from url
    //this.Batches=this._obj.GetBatches();//for without server db
  }

}
