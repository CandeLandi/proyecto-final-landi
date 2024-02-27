import { Injectable } from '@angular/core';
import { User } from './models/index';
import { Observable, catchError, mergeMap, of, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  generateString(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  openSnackBar(message: string, action: string): Observable<any> {
    return this.snackBar.open(message, action, {
      duration: 4000,
    })
      .onAction();
  }
  getUsers() {
    const headers = new HttpHeaders();

    headers.append('token', localStorage.getItem('token') || '');

    return this.http.get<User[]>(`${environment.apiURL}/users`).pipe(
      catchError((error) => {
        this.openSnackBar('Error al cargar los usuarios', 'ok');
        return of([]);
      })
    )
  }

  getUser(user_id: any) {
    return this.http.get(`${environment.apiURL}/${user_id}`)
  }

  addUser(user: User): Observable<User[]> {
    return this.http
      .post<User>(`${environment.apiURL}/users`, {
        user,
        token: this.generateString(10),
      })
      .pipe(mergeMap(() => this.getUsers()));
  }

  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('User is required');
    return this.http.patch<User>(`${environment.apiURL}/users${user.id}`, user)
  }

  deleteUserbyId(id: string) {
    return this.http.delete(`${environment.apiURL}/users/${id}`)
  }

}
