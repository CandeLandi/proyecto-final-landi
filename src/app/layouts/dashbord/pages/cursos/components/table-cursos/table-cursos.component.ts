
import { Component } from '@angular/core';
import { Curso } from '../../models';
import { MatDialog } from '@angular/material/dialog';
import { FormCursosComponent } from '../form-cursos/form-cursos.component';
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-table-cursos',
  templateUrl: './table-cursos.component.html',
  styleUrl: './table-cursos.component.scss'
})
export class TableCursosComponent {

  displayedColumns = ['id', 'courseName', 'createdAt', 'actions']
  cursos!: Curso[]
  datasource: Curso[] = []

  constructor(private cursosService: CursosService,
    public dialog: MatDialog
    ) {
    this.cursosService.getCursos().subscribe({
      next: (cursos:any ) => {
        this.cursos = cursos;
      }
    })
  }
  onCreate(): void {
    this.dialog.open(FormCursosComponent)
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
