import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
// INPUT
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../../../shared/shared.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MY_USER_TOKEN } from '../../../../core/injection-tokens'; 
import { RouterModule } from '@angular/router';
import { UsersTableComponent } from './components/users-table/users-table.component';
@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserDetailComponent,
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    UsersComponent, UserFormComponent
  ]
})
export class UsersModule { }
