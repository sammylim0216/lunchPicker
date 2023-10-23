import { Component, OnInit } from '@angular/core';
import { LunchGroupService } from '../lunch-group.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lunch-group-passcode',
  templateUrl: './lunch-group-passcode.component.html',
  styleUrls: ['./lunch-group-passcode.component.scss']
})
export class LunchGroupPasscodeComponent implements OnInit{

  id: Number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private LunchGroup:LunchGroupService
  ){}
  
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      // console.log(params);
      this.id = params['id'];
    })

    this.LunchGroup.getLunchGroup(this.id);
    if(this.LunchGroup.lunchId == 0){
      this.router.navigate(['lunch-group-notfound']);
    }
  }

  checkPasscode(passcode:string){
    if(passcode){
      if(passcode == this.LunchGroup.lunchGroup.passcode){
        this.LunchGroup.passcodeLogin = true;
        this.router.navigate(['lunch-group-platform']);
      } else {
        alert('Wrong passcode! please try again.');
      }
    } else {
      if(this.LunchGroup.lunchGroup.finalLocation){
        this.router.navigate(['decide-lunch-group']);
      }else{
        this.LunchGroup.passcodeLogin = false;
      this.router.navigate(['lunch-group-platform']);
      }
    }
  }

}
