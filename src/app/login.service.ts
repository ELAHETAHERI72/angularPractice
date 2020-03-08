import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   
  loggedin=false;
  authentication(){
  const promise = new Promise(
      (resolve,reject)=>{
           setTimeout(
            ()=>{
              resolve(this.loggedin)
            } 
           ,1000)
      } 
    )
    return promise;
  }
  login(){
    this.loggedin=true;
  }
 
  logout(){
    this.loggedin=false;
  }
}
