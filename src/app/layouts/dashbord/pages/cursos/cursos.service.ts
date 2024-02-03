import { Injectable } from "@angular/core";
import { Curso } from "./models";
import { delay, of } from "rxjs"; 

Injectable()
export class CursosService {


    getCursos() {
        const cursos: Curso[] = [
            {
                id: 1,
                name: 'Peluqueria',
                createdAt: new Date()
            },
            {
                id: 2,
                name: 'Peluqueria',
                createdAt: new Date()
            },
            {
                id: 3,
                name: 'Peluqueria',
                createdAt: new Date()
            }
        ];
        return of(cursos).pipe(delay(1500));
    }
}