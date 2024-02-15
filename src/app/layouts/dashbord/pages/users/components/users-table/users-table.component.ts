import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { UserPipe } from '../../../../../../shared/full-name.pipe';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent implements OnInit{

  mostrarFormulario: boolean = true;
  displayedColumns: string[] = ['id', 'fullName', 'email', 'course', 'actions'];
  dataSource: UserPipe[] = [
    {
      id: 1,
      firstName: 'Marcelo',
      lastName: 'Martinez',
      email: 'marcelo@gmail.com',
      password: '123456',
      role: 'PROFESOR',
      course: 'ANGULAR',
    },
    {
      id: 2,
      firstName: 'Belen',
      lastName: 'ALUMNA',
      email: 'Belen@gmail.com',
      password: '123456',
      role: 'ALUMNO',
      course: 'JAVASCRIPT',
    },
    {
      id: 3,
      firstName: 'Federico',
      lastName: 'Campo',
      email: 'Fefe@gmail.com',
      password: '123456',
      role: 'ALUMNO',
      course: 'REACT',
    },
    {
      id: 4,
      firstName: 'Federico',
      lastName: 'Campo',
      email: 'Fede@gmail.com',
      password: '123456',
      role: 'PROFESOR',
      course: 'REACT',
    },
  ];

  constructor(private usersService: UsersService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.usersService.getUsers().subscribe(
      (response) => {
        console.log(response)
      }
    )
  }
  onCreate(): void {
    this.dialog.open(UserFormComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          console.log(result)
        }
      }
    })
  }

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
