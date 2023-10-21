import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { LunchGroupService } from '../lunch-group.service';
import { UserService } from '../user.service';
import { User } from 'src/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-lunch-group',
  templateUrl: './create-lunch-group.component.html',
  styleUrls: ['./create-lunch-group.component.scss']
})
export class CreateLunchGroupComponent implements OnInit {


  applyForm: FormGroup;
  
  // = new FormGroup({
  //   partydate:new FormControl(''),
  //   passcode:new FormControl('')
  // });

  constructor(
    private fb: FormBuilder,
    public userList:UserListService,
    private LunchGroup:LunchGroupService,
    private router: Router
  ){}

  ngOnInit(): void {
    // this.joiners = this.userList.userList.
    // filter( u => u.name != this.user.UserObj.name );
  this.applyForm = this.fb.group({
    'partydate':[''],
    'passcode':['']
  });

  }

  onSubmit(){
    this.LunchGroup.lunchGroup.createdDt = this.applyForm.value.partydate;
    this.LunchGroup.lunchGroup.passcode = this.applyForm.value.passcode;
    this.LunchGroup.lunchGroup.location = [];

    console.log(this.LunchGroup);

    this.router.navigate(['lunch-group-platform']);
  }

}
