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
  users:IUserinterface[]=[
    {name:'',id:0}
  ]
  user:IUserinterface;
  constructor(private activeroute:ActivatedRoute,
              private usersedrvice:UserserviceService,
              private rout:Router
              ) { }
  // @ViewChild('inputTxt',{static:true}) inputTxt :ElementRef;
  ngOnInit() {
      this.user = this.usersedrvice.getUser(this.activeroute.params['id']);

  }
  EditUser(){
    this.rout.navigate(['edit'],{relativeTo:this.activeroute , queryParamsHandling:"preserve"})
  }

}
