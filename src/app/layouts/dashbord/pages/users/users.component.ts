import { UserPipe } from './../../../../shared/full-name.pipe';
import { Component } from '@angular/core';
/* import { User } from './models'; */
import { UsersService } from '../../../../core/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role'];
  dataSource: UserPipe[] = [
    {
      id: 1,
      firstName: 'Marcelo',
      lastName: 'Martinez',
      email: 'marcelo@gmail.com',
      password: '123456',
      role: 'USER',
    },
    {
      id: 2,
      firstName: 'Belen',
      lastName: 'Lopez',
      email: 'Belen@gmail.com',
      password: '123456',
      role: 'USER',
    },
    {
      id: 2,
      firstName: 'Federico',
      lastName: 'Campo',
      email: 'Fefe@gmail.com',
      password: '123456',
      role: 'ADMIN',
    },
    {
      id: 2,
      firstName: 'Federico',
      lastName: 'Campo',
      email: 'Fefe@gmail.com',
      password: '123456',
      role: 'ADMIN',
    },
  ];

  constructor(private usersService: UsersService) {}

  onUserSubmitted(ev: UserPipe): void {
    //Angular material nos pide crear un nuevo array para poder refrescar la datasource de la tabla
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }
}
