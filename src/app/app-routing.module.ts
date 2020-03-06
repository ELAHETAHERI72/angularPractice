import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { UserComponent } from './users/user/user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard],children:[
    {path:':id ',component:UserComponent},
    {path:':id /edit',component:EditUserComponent}
  ]},
  {path:'accounts',component:AccountsComponent},
  {path:'**',component:Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
