import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../../core/injection-tokens/index';
import { User } from '../../layouts/dashbord/pages/users/models/index';
import { Observable, catchError, delay, mergeMap, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}
