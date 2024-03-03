
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursosService } from '../../cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../models';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrl: './form-cursos.component.scss'
})
export class FormCursosComponent {
  addCursosForm!: FormGroup;

  isLoading!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private cursosService: CursosService,
    private dialogRef: DialogRef<FormCursosComponent>,
    private activatedRoute: ActivatedRoute
  ) { }

get currentCurso(): Curso {
  const curso = this.addCursosForm.value as Curso;
  return curso;
}

ngOnInit(): void {
  this.addCursosForm = new FormGroup({
    "courseName": new FormControl(""),
    "createdAt": new FormControl(""),
  });

  if (this.data?.curso) {
    this.addCursosForm.get('courseName')?.setValue(this.data.curso.courseName)
    this.addCursosForm.get('createdAt')?.setValue(this.data.curso.createdAt)
  }
}

onSubmit(): void {
  if (this.addCursosForm.invalid) return;
  this.isLoading = true
  if (this.data?.curso) {
    this.cursosService.updateCurso(this.data.curso.id, this.currentCurso)
      .subscribe(curso => {
        this.isLoading = false
        this.dialogRef.close();
      });
    return;
  } else {
    this.cursosService.addCurso(this.currentCurso)
      .subscribe(response => {
        this.isLoading = false
        this.dialogRef.close();
      })
    }
  }
}

