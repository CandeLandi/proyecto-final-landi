import {  Injectable } from '@angular/core';
import { User } from './models/index';
import { Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
    return this.http.post<User>(`${this.baseUrl}`, user)
  }

  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('User is required');
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user)
  }

  deleteUserbyId(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

}
