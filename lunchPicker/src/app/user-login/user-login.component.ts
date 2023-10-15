import { Component, OnInit,Input } from '@angular/core';
import { User } from 'src/user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  results: any;
  constructor(
    public UserObj:UserService,
    private route: ActivatedRoute,
    private router: Router,
    private userList: UserListService
  ){}

  ngOnInit(): void {
    
  }

  checkUser(username:string){
    if(!username){alert("Please insert your username!"); return;}

    this.results = this.userList.userList.filter(
      obj => obj.name.toLowerCase().includes(username.toLowerCase()) 
    )
    
      this.UserObj.UserObj.name = this.results[0].name;
      this.UserObj.UserObj.alias = this.results[0].alias;
    alert(this.UserObj.UserObj.name);
    alert("User is found!");

    this.router.navigate(['user-portal']);
  }
}
