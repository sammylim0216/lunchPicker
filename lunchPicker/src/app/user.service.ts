import { Injectable } from '@angular/core';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  UserObj:User = {
    name:"",
    alias:""
  }

  
}
