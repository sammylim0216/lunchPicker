import { Injectable } from '@angular/core';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }

  userList:User[] = [
    {
      name:"A",
      alias:"A"
    },
    {
      name:"B",
      alias:"B"
    }
    ];
}
