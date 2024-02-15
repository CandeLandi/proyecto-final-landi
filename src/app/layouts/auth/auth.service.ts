import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


interface LoginData {
  email: null | string;
  password: null | string;
}

const MOCK_USER = {
  id: 48,
  email: 'a@a.com',
  firstName: 'FAKENAME',
  lastName: 'FAKELASTNAME',
  password: '123456',
  role: 'ADMIN',
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router, private _snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }

  login(data: LoginData) {
    if (data.email === MOCK_USER.email && data.password === MOCK_USER.password) {
      console.log(2)
      localStorage.setItem("user", JSON.stringify(data))
      this.router.navigate(['cursos']);
    }
    else {
      this.openSnackBar('Datos incorrectos', 'Aceptar')
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  verifyToken() {
    if (localStorage.getItem('user')) {
      return true
    } else {
      return false
    }
  }
}
