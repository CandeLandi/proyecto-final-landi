import { Injectable } from "@angular/core";
import { Curso } from "../../layouts/dashbord/pages/cursos/models";
import { delay, of } from "rxjs"; 

Injectable()
export class CursosService {

    getCursos() {
        let cursos: Curso[] = [
            {
                id: 1,
                name: 'Angular',
                createdAt: new Date()
            },
            {
                id: 2,
                name: 'React',
                createdAt: new Date()
            },
            {
                id: 3,
                name: 'JavaScript',
                createdAt: new Date()
            }
        ];
        return of(cursos).pipe(delay(1500));
    }
}