import { Injectable } from "@angular/core";
import { Curso } from "./models";
import { Observable, delay, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

Injectable()
export class CursosService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://65ccfa26dd519126b83fe862.mockapi.io/api/courses";

  getCursos() {
    return this.http.get(`${this.baseUrl}`)
  }

  getUser(curso_id: any) {
    return this.http.get(`${this.baseUrl}/${curso_id}`)
  }

  addUser(course: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.baseUrl}`, course)
  }

  updateUser(curso: Curso): Observable<Curso> {
    if (!curso.id) throw Error('is required');
    return this.http.put<Curso>(`${this.baseUrl}/${curso.id}`, curso)
  }

  deleteUserbyId(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

}
