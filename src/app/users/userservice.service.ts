import { Injectable } from '@angular/core';
import { IUserinterface } from './userinterface';
import { IUser } from '../user';

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
 update(id:number , user:IUser){
  let username = this.users.find(
    (u)=>{
     return u.id === id;
    }
  )
  return username =user;
}
  
}
