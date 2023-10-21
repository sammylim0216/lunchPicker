import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LunchGroupService } from '../lunch-group.service';


@Component({
  selector: 'app-lunch-group-platform',
  templateUrl: './lunch-group-platform.component.html',
  styleUrls: ['./lunch-group-platform.component.scss']
})
export class LunchGroupPlatformComponent implements OnInit{

  createDt:string = "";
  finalLocation:string = "";
  
  constructor(
    private lunchGroup:LunchGroupService
    ){}

  ngOnInit(): void {
    this.createDt = this.lunchGroup.lunchGroup.createdDt.toString();
  }

  addLocation(newLocation:string){
    console.log(newLocation);
    this.lunchGroup.addLocation(newLocation);
    console.log(this.lunchGroup.lunchGroup);
  }

  refreshLocation(){
    alert('Refresh Location');
  }

  decideLocation(){
    this.finalLocation=this.lunchGroup.lunchGroup.location[this.getRandomInt(this.lunchGroup.lunchGroup.location.length)];
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
}
