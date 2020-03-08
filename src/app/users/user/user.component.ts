import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/user';
import { UserserviceService } from 'src/app/userservice.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:IUser={
    id:0,name:''
  };
  constructor(private userservice:UserserviceService,
              private active:ActivatedRoute ,
              private router:Router) { }

  ngOnInit() {
    this.active.params.subscribe(
      (params:Params)=>{
        this.user = this.userservice.getuser(+params['id']);
      }
    )
  }
  edituser(){
    this.router.navigate(['edit'],{relativeTo:this.active,queryParamsHandling:'preserve'})
  }
}
