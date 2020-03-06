import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class Login{
  loggedind=false;
  
  isAuthenticated(){
    const promise = new Promise(
      (resolve,reject)=>{
         setTimeout(
           ()=>{
              resolve(this.loggedind)
           },1000);
      }
    )
    return promise;
  }
  logein(){
    this.loggedind = true;
  }
  logeout(){
    this.loggedind = false;
  }
}
