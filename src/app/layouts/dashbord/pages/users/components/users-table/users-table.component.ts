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
export class UsersTableComponent implements OnInit {
  isLoading!: boolean;
  mostrarFormulario: boolean = true;
  displayedColumns: string[] = ['id', 'fullName', 'email', 'course', 'actions'];
  dataSource: UserPipe[] = [];

  constructor(private usersService: UsersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.isLoading = true;
    this.usersService.getUsers().subscribe(
      (response: any) => {
        this.dataSource = response;
        this.isLoading = false;
      }
    )
  }

  onCreate(): void {
    this.isLoading = true;
    this.dialog.open(UserFormComponent).afterClosed().subscribe({
      next: (result) => {
        this.getUsers()
      }
    })
  }

  editUser(user: any): void {
    let dialogRef = this.dialog.open(UserFormComponent, {
      data: { user },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        this.getUsers()
      }
    })
  }

  deleteUser(id: any): void {
    this.isLoading = true;
    this.usersService.deleteUserbyId(id).subscribe(
      (response) => {               
        this.getUsers()
      }
    )
  }
}

