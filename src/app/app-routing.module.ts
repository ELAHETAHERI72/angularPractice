import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthguardService } from './authguard.service';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,canActivate:[AuthguardService],children:[
    {path:':id',component:UserComponent},
    {path:':id/edit',component:EdituserComponent}
  ]},
  {path:'accounts',component:AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
