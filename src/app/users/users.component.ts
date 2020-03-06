import { Component, OnInit } from '@angular/core';
import { IUserinterface } from './userinterface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:IUserinterface[]=[
    {id:1,name:'elahe'},
    {id:2,name:'zahra'},
    {id:3,name:'fatemeh'}

  ]
  constructor(private rout:Router,
              private active:ActivatedRoute) { }

  ngOnInit() {
     
  }

}
