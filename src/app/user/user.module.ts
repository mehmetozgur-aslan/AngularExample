import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserRoleComponent } from './user/user-role/user-role.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
   path:"",
   component:UserListComponent
  },
   {
    path:":id",
    component:UserComponent,
    children:[
      {
        path:"details",
        component:UserDetailsComponent
      },
      {
        path:"role",
        component:UserRoleComponent
      },
      {
        path:"",
        redirectTo:"details",
        pathMatch:"full"
      }
    ]
   }

];


@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserRoleComponent,UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
