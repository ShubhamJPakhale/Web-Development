import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-list',
  template: `<h2>Inside Batch List</h2>
  <ul *ngFor="let item of Batches">
    <li>{{item.Name}} With duration {{item.Duration}} having fees {{item.Fees}}</li>
  </ul>`
})
export class BatchListComponent implements OnInit 
{
  public Batches=[
    {"Name":"PPA","Duration":4,"Fees":11000},
    {"Name":"LB","Duration":3,"Fees":9000},
    {"Name":"Angular","Duration":5,"Fees":15000}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
