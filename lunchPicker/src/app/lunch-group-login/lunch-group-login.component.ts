import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lunch-group-login',
  templateUrl: './lunch-group-login.component.html',
  styleUrls: ['./lunch-group-login.component.scss']
})
export class LunchGroupLoginComponent implements OnInit {

  constructor(
    private router: Router

  ){}

  ngOnInit(): void {
    
  }

  createLunchParty(){
    this.router.navigate(['create-lunch-group']);
  }
}
