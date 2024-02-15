import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
// INPUT
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../../../shared/shared.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MY_USER_TOKEN } from '../../../../core/injection-tokens';
import { RouterModule } from '@angular/router';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserDetailComponent,
    UsersTableComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    MatFormFieldModule,
        MatInputModule
  ],
  exports: [
    UsersComponent, UserFormComponent
  ]
})
export class UsersModule { }
