import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Curso } from './models/index';
import { environment } from "../../../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class CursosService {

  constructor(
    private http: HttpClient,
  ) { }


  getCursos() {
    return this.http.get(`${environment.apiURL}/courses`)
  }

  getCurso(curso_id: any) {
    return this.http.get(`${environment.apiURL}/${curso_id}`)
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${environment.apiURL}/courses`, curso)
  }

  updateCurso(curso_id:number, curso: Curso): Observable<Curso> {
    return this.http.patch<Curso>(`${environment.apiURL}/${curso_id}`, curso)
  }

  deleteCursobyId(id: string) {
    return this.http.delete(`${environment.apiURL}/courses/${id}`)
  }

}
