import { UserPipe } from './../../../../shared/full-name.pipe';
import { Component } from '@angular/core';
/* import { User } from './models'; */
import { UsersService } from './users.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {

}
