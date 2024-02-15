import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../../core/injection-tokens/index';
import { User } from '../../layouts/dashbord/pages/users/models/index';
import { Observable, catchError, delay, map, mergeMap, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://65ccfa26dd519126b83fe862.mockapi.io/api/users";

  getUsers() {
    return this.http.get(`${this.baseUrl}`)
  }

  getUser(user_id: any) {
    return this.http.get(`${this.baseUrl}/${user_id}`)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user)
  }

  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('User is required');
    return this.http.patch<User>(`${this.baseUrl}/${user.id}`, user)
  }

  deleteUserbyId(id: string): Observable<boolean> {

    return this.http.delete(`${this.baseUrl} ${id}`)
      .pipe(
        catchError(err => of(false)),
        map(resp => true)
      );
  }





}
