import { Injectable } from '@angular/core';
import { LunchGroup } from './lunch-group';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LunchGroupService {

  finalLocation:string='';
  passcodeLogin:boolean = false;
  lunchId:number = 0;
 
  constructor(
    private http: HttpClient) { }

  lunchGroup:LunchGroup={
    passcode:'',
    location:[],
    createdDt : new Date,
    finalLocation:''
  }

  createLunchGroup(){
    const headers = new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Methods':'OPTIONS, DELETE, POST, GET, PATCH, PUT',
      'Access-Control-Max-Age':'3600',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin'
    })

    this.http.post<any>("http://localhost:8080/lunch/addParty",this.lunchGroup,{headers})
    .subscribe(data => {
      console.log(data);
      this.lunchGroup.createdDt = data.createdDt;
      this.lunchGroup.passcode = data.passcode;
      this.lunchId = data.lunchId;
      this.passcodeLogin = true;
      
      console.log(this.lunchGroup);
      console.log('this.LunchGroup.lunchId:'+this.lunchId);
    });
  }

  getLunchGroup(id:Number){
    const headers = new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Methods':'OPTIONS, DELETE, POST, GET, PATCH, PUT',
      'Access-Control-Max-Age':'3600',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin'
    })

    this.http.get<any>("http://localhost:8080/lunch/"+id,{headers})
    .subscribe(data => {
      if(data.lunchId != null){
        this.lunchGroup.createdDt = data.createdDt;
        this.lunchGroup.passcode = data.passcode;
        this.lunchGroup.finalLocation = data.finalLocation;
        this.lunchId = data.lunchId;
        this.getLocations();
        // console.log(this.lunchGroup);
        // console.log('this.LunchGroup.lunchId:'+this.lunchId);
      }
    });
  }

  updateLunchGroup(){
    const headers = new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Methods':'OPTIONS, DELETE, POST, GET, PATCH, PUT',
      'Access-Control-Max-Age':'3600',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin'
    })

    let params = {
      'lunchId':this.lunchId,
      'passcode':this.lunchGroup.passcode,
      'finalLocation':this.lunchGroup.finalLocation
    };

    this.http.post<any>("http://localhost:8080/lunch/updateParty",params,{headers})
    .subscribe(data => {
      console.log(data);
      this.lunchGroup.createdDt = data.createdDt;
      this.lunchGroup.passcode = data.passcode;
      this.lunchGroup.finalLocation = data.finalLocation;
      this.lunchId = data.lunchId;
      console.log(this.lunchGroup);
      console.log('this.LunchGroup.lunchId:'+this.lunchId);
    });
  }


  addLocation(location:string){
    this.lunchGroup.location.push(location);

    const headers = new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Methods':'OPTIONS, DELETE, POST, GET, PATCH, PUT',
      'Access-Control-Max-Age':'3600',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin'
    })

    let param = {
      "location":location,
      "createdDt":new Date,
      "lunchId":this.lunchId
    };

    this.http.post<any>("http://localhost:8080/location/addLocation",param,{headers})
    .subscribe(data => {
      // console.log(data);
      // this.lunchGroup.createdDt = data.createdDt;
      // this.lunchGroup.passcode = data.passcode;
      // this.lunchGroup.location = data.location;
      // this.lunchId = data.lunchId;
      
      // console.log(this.lunchGroup);
      // console.log('this.LunchGroup.lunchId:'+this.lunchId);
      this.getLocations();
    });
  }

  getLocations(){
    const headers = new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Methods':'OPTIONS, DELETE, POST, GET, PATCH, PUT',
      'Access-Control-Max-Age':'3600',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin'
    })

    this.http.get<any>("http://localhost:8080/location/"+this.lunchId,{headers})
      .subscribe(data =>{
        console.log(data);
        this.lunchGroup.location = data;
      })
  }
  
}
