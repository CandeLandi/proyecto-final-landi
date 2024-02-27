import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../dashbord/pages/users/models';
import { Observable, catchError, map, of, pipe, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { AuthActions } from '../../core/store/auth/actions';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../core/services/loading.service copy';


export interface LoginData {
  email: null | string;
  password: null | string;
}

export const MOCK_USER = {
  id: 48,
  email: 'admin@a.com',
  password: '12345',
  role: 'ADMIN',
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router,
    private _snackBar: MatSnackBar,
    private store: Store,
    private loadingService: LoadingService,
    private httpClient: HttpClient) {
  }
  private setAuthUser(user: User): void {
    this.store.dispatch(AuthActions.setAuthUser({ user }));
    localStorage.setItem('token', user.token);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  login(data: LoginData): Observable<User[]> {
    return this.httpClient
      .get<User[]>(
        `${environment.apiURL}/users?email=${data.email}&password=${data.password}`
      )
      .pipe(
        tap((response) => {
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', 'home']);
          } else {
            this.openSnackBar('Datos incorrectos', 'Aceptar')          }
        })
      );
  }
  logout(): void {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }


  verifyToken() {
    return this.httpClient
      .get<User[]>(
        `${environment.apiURL}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((response) => {
          if (response.length) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.store.dispatch(AuthActions.logout());
            localStorage.removeItem('token');
            return false;
          }
        }),
        catchError(() => of(false))
      );
  }
}
