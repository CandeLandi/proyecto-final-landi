import { Injectable } from '@angular/core';
import { User } from './models/index';
import { Observable, Subscriber, catchError, mergeMap, of, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inscription } from '../inscriptions/store/models';

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
    return this.http.get<User[]>(`${environment.apiURL}/users`).pipe(
      catchError((error) => {
        this.openSnackBar('Error al cargar los usuarios', 'ok');
        return of([]);
      })
    )
  }
  ngOnInit(): void {
    this.getUsers()
  }

  getUser(id: number | string): Observable<User | undefined> {
    return this.http.get<User>(`${environment.apiURL}/users/${id}`);
  }

  addUser(users: User): Observable<User[]> {
    return this.http
      .post<User>(`${environment.apiURL}/users`, {
        ...users,
        token: this.generateString(5),
      })
      .pipe(mergeMap(() => this.getUsers()));
  }

  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('User is required');
    return this.http.patch<User>(`${environment.apiURL}/users/${user.id}`, user)
  }

  deleteUserbyId(id: string) {
    return this.http.delete(`${environment.apiURL}/users/${id}`)
  }

  getAllSubscribers(): Observable<Inscription[]>{
    return this.http.get<Inscription[]>(`${environment.apiURL}/users?role=subscribed`)
  }

}
