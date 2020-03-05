import { Injectable } from '@angular/core';
import { IUserinterface } from './userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users:IUserinterface[]=[
    {id:1,name:'elahe'},
    {id:2,name:'zahra'},
    {id:3,name:'fatemeh'}
  ]
  constructor() { }
  getUser(id){
   const user = this.users.find(
      (u)=>{
        return u.id === id
      }
    )
    return user
  }
}
