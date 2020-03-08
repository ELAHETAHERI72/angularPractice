import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private loginservice:LoginService) { }

  ngOnInit() {
  }
  logein(){
     this.loginservice.login();
  }
  logout(){
    this.loginservice.logout();
  }
}
