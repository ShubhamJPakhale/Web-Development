import { Injectable } from '@angular/core';
import { IBatches } from './Batches';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchServiceService 
{
  //Business Logic
  //connection to server

  public URL='./assets/Data/Batches.json'; //url for fetching data from server database

  constructor(private _obj:HttpClient) 
  { }

  // we are using don't repeat yourself policy so that we avoid the redundancy of code 
  public GetBatches() :Observable<IBatches[]>// this method is used to give this tuple to any component who calls this service this method
  {
    return this._obj.get<IBatches[]>(this.URL);

    // commented for creating server json and from there we have to call the data to service so for that reason i have commented
    // return [
    //   {"Name":"PPA","Duration":4,"Fees":11000},
    //   {"Name":"LB","Duration":3,"Fees":9000},
    //   {"Name":"Angular","Duration":5,"Fees":15000}
    // ]
  }
}
