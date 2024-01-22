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
  mostrarFormulario: boolean = true;
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'delete'];
  dataSource: UserPipe[] = [
    {
      id: 1,
      firstName: 'Marcelo',
      lastName: 'Martinez',
      email: 'marcelo@gmail.com',
      password: '123456',
      role: 'PROFESOR',
    },
    {
      id: 2,
      firstName: 'Belen',
      lastName: 'ALUMNA',
      email: 'Belen@gmail.com',
      password: '123456',
      role: 'ALUMNO',
    },
    {
      id: 3,
      firstName: 'Federico',
      lastName: 'Campo',
      email: 'Fefe@gmail.com',
      password: '123456',
      role: 'ALUMNO',
    },
    {
      id: 4,
      firstName: 'Federico',
      lastName: 'Campo',
      email: 'Fede@gmail.com',
      password: '123456',
      role: 'PROFESOR',
    },
  ];

  constructor(private usersService: UsersService) {}

  onUserSubmitted(ev: UserPipe): void {
    //Angular material nos pide crear un nuevo array para poder refrescar la datasource de la tabla
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
    this.mostrarFormulario = false;
  }
  deleteUser(id: number): void {
    // Filtrar el usuario con el id proporcionado
    this.dataSource = this.dataSource.filter(usuario => usuario.id !== id);
  }
}
