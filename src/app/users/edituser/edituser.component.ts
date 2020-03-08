import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/user';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user:IUser={
    id :0,
    name :''
  }
  userid;
  username;
  parametr = false;
  constructor(private active:ActivatedRoute,
              private userservice:UserserviceService) { }

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
  
}
