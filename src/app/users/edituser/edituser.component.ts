import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IUser } from 'src/app/user';
import { UserserviceService } from 'src/app/userservice.service';
import { CandeactiveGuard, cancomponentdeactive } from 'src/app/candeactive-guard.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit ,cancomponentdeactive{
  user:IUser={
    id :0,
    name :''
  }
  userid;
  username;
  parametr = false;
  savechanges =false;

  constructor(private active:ActivatedRoute,
              private userservice:UserserviceService,
              private router : Router) { }

  ngOnInit() {
     this.active.params.subscribe(
       (params:Params)=>{
         this.user = this.userservice.getuser(+params['id'])
       }
     )
     this.active.queryParams.subscribe(
      (queryParams)=>{
         this.parametr = queryParams['userEdit'] === 1 ? true: false;
      }
    )
    this.userid = this.user.id;
    this.username = this.user.name;
  }
  
  onsave(){
     this.user.id = this.userid;
     this.user.name = this.username;
    this.userservice.update(this.user.id,this.user);
    this.savechanges = true;
    this.router.navigate(['../'],{relativeTo:this.active});
  }
  canDeactivate() : boolean | import("rxjs").Observable<boolean> | Promise<boolean>{
     if(!this.parametr){
       return true;
     }
     if((this.userid != this.user.id || this.username != this.user.name) && !this.savechanges){

     }
  }

}
