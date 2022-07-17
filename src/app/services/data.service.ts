import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user: User = {
    id: 10001, 
    name: 'John Smith',
    email: 'john@gmail.com', 
    status: true,
    address: 'JK Street'
  }

  public userList:User[] = [
    { id: 10001, 
      name: 'John Smith',
      email: 'john@gmail.com', 
      status: true,
      address: 'JK Street'
    },{
      id: 10002, 
      name: 'Mike Smith',
      email: 'mike@gmail.com', 
      status: false,
      address: 'MK Street'
    }    
  ];
  public isLogged:boolean = false;
  public token:String = 'JBNJHJHDBJSBNJUIJWE($*JMN(I#@MMBNCGC';

  constructor() { }

  public getUser():User {
    return this.user;
  }

  public get UserId(): number {
    return this.user.id;
  }

  public isLoggedIn(): boolean {
    return this.isLogged;
  }

  public get UserList(): User[] {
    return this.userList;
  }

}
