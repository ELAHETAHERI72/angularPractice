import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UserComponent } from './users/user/user.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { LoginService } from './login.service';
import { AuthguardService } from './authguard.service';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AccountsComponent,
    UserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [UsersComponent,LoginService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
