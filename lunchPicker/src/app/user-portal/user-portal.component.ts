import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss']
})
export class UserPortalComponent implements OnInit {
  
  name:string="";
  
  constructor(
    public userObj:UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.name = this.userObj.UserObj.name;
  }

  createLunchParty(){
    this.router.navigate(['create-lunch-group']);
  }
}
