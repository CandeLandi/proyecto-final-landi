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
  getInscriptions() {
    return this.http.get<Inscription[]>(
      `${environment.apiURL}/inscriptions?_embed=user&_embed=curso`
    );
  }

  getInscriptionsById(userId: string | number) {
    return this.http.get<User>(`${environment.apiURL}/users/${userId}`).pipe(
      concatMap((user) =>
        this.http.get(`${environment.apiURL}/inscriptions?userId=${user.id}`)
      ),
      catchError((error) => {
        alert('Ocurrio un error');
        return throwError(() => error);
      })
    );
  }

  createInscription(data: CreateInscriptionData) {
    console.log(data)
    return this.http.post<Inscription>(`${environment.apiURL}/inscriptions`, data);
  }
  
}
