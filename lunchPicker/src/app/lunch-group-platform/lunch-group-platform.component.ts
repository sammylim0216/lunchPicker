import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LunchGroupService } from '../lunch-group.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lunch-group-platform',
  templateUrl: './lunch-group-platform.component.html',
  styleUrls: ['./lunch-group-platform.component.scss']
})
export class LunchGroupPlatformComponent implements OnInit{

  createDt:string = "";
  finalLocation:string = "";
  locations:string[] = [];
  shareUrl:string ="";
  hideFunction:boolean = false;
  
  constructor(
    private router: Router,
    private lunchGroup:LunchGroupService
    ){}

  ngOnInit(): void {
    this.createDt = this.lunchGroup.lunchGroup.createdDt.toString();
    this.locations = this.lunchGroup.lunchGroup.location;
    this.shareUrl = window.location.host+'/lunch-group-passcode/'+this.lunchGroup.lunchId;
  }

  addLocation(newLocation:string){
    console.log(newLocation);
    this.lunchGroup.addLocation(newLocation);
    this.locations = this.lunchGroup.lunchGroup.location;
    console.log(this.lunchGroup.lunchGroup);
  }

  refreshLocation(){
    this.lunchGroup.getLocations();
  }


  rollLocation(){
    this.finalLocation=this.lunchGroup.lunchGroup.location[this.getRandomInt(this.lunchGroup.lunchGroup.location.length)];
  }

  decideLocation(){

    console.log('this.finalLocation:'+this.finalLocation);

    if(this.finalLocation){
      this.lunchGroup.lunchGroup.finalLocation = this.finalLocation;
      this.lunchGroup.updateLunchGroup();
      this.router.navigate(['decide-lunch-group']);
    } else {
      alert('No Location is stated!');
    }

    
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
}
