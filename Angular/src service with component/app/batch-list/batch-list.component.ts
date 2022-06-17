import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../batch-service.service';

@Component({
  selector: 'app-batch-list',
  template: `
  <h2>Batch List :-</h2>
  <ul *ngFor="let items of Batches;let indexOfelement=index">
    <li>{{indexOfelement+1}} {{items.Name}}</li>
  </ul>
  
  `
})
export class BatchListComponent implements OnInit 
{
  public Batches:any=[];

  constructor(private _obj:BatchServiceService) // which create object of batchserviceservice 
  { 

  }

  ngOnInit(): void 
  {
    this.Batches=this._obj.GetBatches().subscribe(data => this.Batches = data);// with server db using httpclient get method
    //this.Batches=this._obj.GetBatches(); // which call getbatches method of batchserviceservice and put response in batches tuple of batchlist component ts
  }

}
