import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  displayedColumns = ['id', 'courseName', 'createdAt', 'actions']

  cursos: Curso[] = []

  constructor(private cursosService: CursosService) {
    this.cursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    })
  }
}
