import {  Injectable } from '@angular/core';
import { User } from './models/index';
import { Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.apiURL}/users`)
  }

  getUser(user_id: any) {
    return this.http.get(`${environment.apiURL}/${user_id}`)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiURL}`, user)
  }

  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('User is required');
    return this.http.patch<User>(`${environment.apiURL}/${user.id}`, user)
  }

  deleteUserbyId(id: string) {
    return this.http.delete(`${environment.apiURL}/users/${id}`)
  }

}
