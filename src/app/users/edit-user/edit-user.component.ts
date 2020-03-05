import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { IUserinterface } from '../userinterface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user:IUserinterface;
  username;
  userid;
  allowEdit = false;
  constructor(private activeroute:ActivatedRoute,
              private usersedrvice:UserserviceService) { }

  ngOnInit() {
    this.activeroute.params.subscribe(
      (params:Params)=>{
         this.user= this.usersedrvice.getUser(+params['id']);        
      }
    );
     this.activeroute.queryParams.subscribe(
       (query:Params)=>{
          this.allowEdit = query['allowEdit'] === '1' ? true : false;
       }
     );
     this.userid = this.user.id;
     this.username = this.user.name;
  }

}
