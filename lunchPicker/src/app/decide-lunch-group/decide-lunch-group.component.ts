import { Component, OnInit } from '@angular/core';
import { LunchGroupService } from '../lunch-group.service';

@Component({
  selector: 'app-decide-lunch-group',
  templateUrl: './decide-lunch-group.component.html',
  styleUrls: ['./decide-lunch-group.component.scss']
})
export class DecideLunchGroupComponent implements OnInit{
  
  finalLocation:String='';

  constructor(
    private LunchGroup:LunchGroupService
  ){}
  
  ngOnInit(): void {
    this.finalLocation = this.LunchGroup.lunchGroup.finalLocation;
  }

}
