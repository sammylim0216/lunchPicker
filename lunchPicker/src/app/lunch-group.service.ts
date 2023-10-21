import { Injectable } from '@angular/core';
import { LunchGroup } from './lunch-group';


@Injectable({
  providedIn: 'root'
})
export class LunchGroupService {

  finalLocation:string='';

  constructor() { }

  lunchGroup:LunchGroup={
    passcode:'',
    id:'',
    location:[],
    createdDt : new Date
  }


  addLocation(location:any){
    this.lunchGroup.location.push(location);
  }

  
}
