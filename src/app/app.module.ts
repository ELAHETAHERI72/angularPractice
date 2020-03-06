import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { UserComponent } from './users/user/user.component';
import { from } from 'rxjs';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AuthGuard } from './auth-guard.service';
import { Login } from './login.service';
import { UserserviceService } from './users/userservice.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AccountsComponent,
    Notfound404Component,
    UserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserserviceService,AuthGuard,Login],
  bootstrap: [AppComponent]
})
export class AppModule { }
