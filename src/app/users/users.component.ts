import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:IUser[]=[
    {name:'elahe',id:1},
    {name:'fatemeh',id:2},
    {name:'zahrz',id:3},
    {name:'younes',id:4}
  ]
  constructor(private userservice : UserserviceService) { }

  ngOnInit() {
     console.log(this.users)
  }

}
