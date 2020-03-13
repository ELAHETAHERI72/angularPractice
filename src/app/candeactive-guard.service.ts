import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { CanDeactivate } from '@angular/router';

export interface cancomponentdeactive{
    canDeactivate : ()=> Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CandeactiveGuard implements CanDeactivate<cancomponentdeactive>{
  canDeactivate(component: cancomponentdeactive, 
                currentRoute: import("@angular/router").ActivatedRouteSnapshot, 
                currentState: import("@angular/router").RouterStateSnapshot, 
                nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
                         return component.canDeactivate();
  }

  constructor() { }
}
