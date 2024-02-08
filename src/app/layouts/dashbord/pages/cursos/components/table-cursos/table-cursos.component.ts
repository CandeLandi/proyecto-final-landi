
import { Component } from '@angular/core';
import { CursosService } from '../../../../../../core/services/cursos.service';
import { Curso } from '../../models';

@Component({
  selector: 'app-table-cursos',
  templateUrl: './table-cursos.component.html',
  styleUrl: './table-cursos.component.scss'
})
export class TableCursosComponent {

  displayedColumns = ['id', 'courseName', 'createdAt', 'actions']
  cursos!: Curso[]
  datasource: Curso[] = []

  constructor(private cursosService: CursosService) {
    this.cursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    })
  }
  onUserSubmitted(ev: Curso): void {
    //Angular material nos pide crear un nuevo array para poder refrescar la datasource de la tabla
    this.cursos = [...this.cursos, { ...ev, id: new Date().getTime() }];
  }
  deleteUser(id: number): void {
    // Filtrar el usuario con el id proporcionado
    this.cursos = this.cursos.filter(curso => curso.id !== id);
  }
}
