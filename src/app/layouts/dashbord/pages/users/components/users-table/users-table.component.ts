import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { UserPipe } from '../../../../../../shared/full-name.pipe';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models';
import { Observable } from 'rxjs/internal/Observable';



@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent implements OnInit {
  isLoading!: boolean;
  mostrarFormulario: boolean = true;
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'course', 'actions'];
  dataSource: UserPipe[] = [];

  constructor(private usersService: UsersService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
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
    this.dialog.open(UserFormComponent).afterClosed().subscribe({
      next: (result) => {
        this.getUsers()
      }
    })
  }

  editUser(user: any): void {
    const message = "El usuario fue actualizado";
    const action = "Ok";

    let dialogRef = this.dialog.open(UserFormComponent, {
      data: { user },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        this.getUsers()
        this.openSnackBar(message, action).subscribe(() => {
          duration: 3000
        });
      }
    })
  }

  openSnackBar(message: string, action: string): Observable<any> {
    return this.snackBar.open(message, action, {
      duration: 4000,
    })
      .onAction();
  }

  deleteUser(id: any): void {
    const message = "¿Seguro que quieres eliminar el usuario?";
    const action = "Sí";

    this.openSnackBar(message, action).subscribe(() => {
      this.isLoading = true;
      this.usersService.deleteUserbyId(id).subscribe(
        (response) => {
          this.getUsers()
        }
      )
    });
  }

  openUserDetail(user: any): void {
    let dialogRef = this.dialog.open(UserDetailComponent, {
      data: { user },
    });
  }
}

