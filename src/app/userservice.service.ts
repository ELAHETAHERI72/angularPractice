import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users:IUser[]=[
    {name:'elahe',id:1},
    {name:'fatemeh',id:2},
    {name:'zahrz',id:3},
    {name:'younes',id:4}
  ]
  constructor() { }
   getuser(id:number){
     const user= this.users.find(
       (u)=>{
         return u.id===id;
       }
     )
     return user;
   }
}
