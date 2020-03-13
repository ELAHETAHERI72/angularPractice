import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Routes, Router } from '@angular/router';
import { LoginService } from './login.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private loginservice:LoginService,private active:ActivatedRoute,private router:Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return this.loginservice.authentication().then(
           (auth:boolean)=>{
              if(auth){
                return true;
              }else{
                this.router.navigate(['/'])
              }
           }
         )   
  }


}
