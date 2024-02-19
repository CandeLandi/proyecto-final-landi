
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
  isLoading!: boolean;
  mostrarFormulario: boolean = true;
  displayedColumns = ['id', 'courseName', 'createdAt', 'actions']
  datasource: Curso[] = []


  constructor(private cursosService: CursosService,
    public dialog: MatDialog
    ) { }

    ngOnInit(): void {
       this.getCursos()
    }

    getCursos() {
      this.isLoading = true;
      this.cursosService.getCursos().subscribe(
        (response: any) => {
          this.datasource = response;
          this.isLoading = false;
        }
      )
    }

    onCreate(): void {
      this.isLoading = true;
      this.dialog.open(FormCursosComponent).afterClosed().subscribe({
        next: (result) => {
          this.getCursos()
        }
      })
    }

    editCurso(curso: any): void {
      let dialogRef = this.dialog.open(FormCursosComponent, {
        data: { curso },
      });

      dialogRef.afterClosed().subscribe({
        next: (result) => {
          this.getCursos()
        }
      })
    }

    deleteCursoById(id: any): void {
      this.isLoading = true;
      this.cursosService.deleteCursobyId(id).subscribe(
        (response) => {
          this.getCursos()
        }
      )
    }
}
