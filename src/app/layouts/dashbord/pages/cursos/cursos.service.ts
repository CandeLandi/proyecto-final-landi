import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Curso } from './models/index';

@Injectable({ providedIn: 'root' })
export class CursosService {

  constructor(
    private http: HttpClient,
  ) { }

  baseUrl = "https://65ccfa26dd519126b83fe862.mockapi.io/api/courses";

  getCursos() {
    return this.http.get(`${this.baseUrl}`)
  }

  getCurso(curso_id: any) {
    return this.http.get(`${this.baseUrl}/${curso_id}`)
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.baseUrl}`, curso)
  }

  updateCurso(curso_id:number, curso: Curso): Observable<Curso> {
    console.log(curso);
    return this.http.put<Curso>(`${this.baseUrl}/${curso_id}`, curso)
  }

  deleteCursobyId(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

}
