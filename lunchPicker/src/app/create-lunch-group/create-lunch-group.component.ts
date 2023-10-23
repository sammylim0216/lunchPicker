import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { LunchGroupService } from '../lunch-group.service';
import { UserService } from '../user.service';
import { User } from 'src/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LunchGroup } from '../lunch-group';

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
    private router: Router,
    private http: HttpClient
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

    // const headers = new HttpHeaders({ 
    //   'Access-Control-Allow-Origin': '*', 
    //   'Access-Control-Allow-Credentials':'true',
    //   'Access-Control-Allow-Methods':'OPTIONS, DELETE, POST, GET, PATCH, PUT',
    //   'Access-Control-Max-Age':'3600',
    //   'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin'
    // })

    // this.http.post<any>("http://localhost:8080/lunch/addParty",this.LunchGroup.lunchGroup,{headers})
    // .subscribe(data => {
    //   console.log(data);
    //   this.LunchGroup.lunchGroup.createdDt = data.createdDt;
    //   this.LunchGroup.lunchGroup.passcode = data.passcode;
    //   this.LunchGroup.lunchGroup.location = data.location;
    //   this.LunchGroup.lunchId = data.lunchId;
      
    //   console.log(this.LunchGroup.lunchGroup);
    //   console.log('this.LunchGroup.lunchId:'+this.LunchGroup.lunchId);
    // });
    this.LunchGroup.createLunchGroup();


    this.router.navigate(['lunch-group-platform']);
  }

}
