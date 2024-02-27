import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../users/models';
import { environment } from '../../../../../../environments/environment';
import { catchError, concatMap, throwError } from 'rxjs';
import { CreateInscriptionData, Inscription } from './store/models';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  constructor( private http: HttpClient) {
  }
  getSales() {
    return this.http.get<Inscription[]>(
      `${environment.apiURL}/sales?_embed=user&_embed=product`
    );
  }

  getSalesById(userId: string | number) {
    return this.http.get<User>(`${environment.apiURL}/users/${userId}`).pipe(
      concatMap((user) =>
        this.http.get(`${environment.apiURL}/sales?userId=${user.id}`)
      ),
      catchError((error) => {
        alert('Ocurrio un error');
        return throwError(() => error);
      })
    );
  }

  createSale(data: CreateInscriptionData) {
    return this.http.post<Inscription>(`${environment.apiURL}/sales`, data);
  }
}
