import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IUserinterface } from '../userinterface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // users:IUserinterface;
  user:IUserinterface={
    id:0 ,name:''
  };
  constructor(private activeroute:ActivatedRoute,
              private usersedrvice:UserserviceService,
              private rout:Router
              ) { }
  // @ViewChild('inputTxt',{static:true}) inputTxt :ElementRef;
  ngOnInit() { 
     this.activeroute.params.subscribe(
       (params:Params)=>{
          console.log(params);
             this.user = this.usersedrvice.getUser(+params['id']);
       }
    )
  }
  EditUser(){
    this.rout.navigate(['edit'],{relativeTo:this.activeroute , queryParamsHandling:"preserve"})
   
  }

}
