import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private Login:Login) { }

  ngOnInit() {
  }
  // UsersPage(){
  //     this.router.navigate(['/users']);
  // }
  loggedin(){
    this.Login.logein();
  }
  loggedout(){
    this.Login.logeout();
  }
}
