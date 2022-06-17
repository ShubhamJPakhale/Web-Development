import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-details',
  template: `<h2>Inside Batch Details</h2>
  <ul *ngFor="let item of Batches">
    <li>{{item.Name}}</li>
  </ul>
  `
})
export class BatchDetailsComponent implements OnInit 
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
