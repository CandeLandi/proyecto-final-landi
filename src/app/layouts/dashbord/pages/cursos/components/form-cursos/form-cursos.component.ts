
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrl: './form-cursos.component.scss'
})
export class FormCursosComponent {
  addCursosForm: FormGroup;
  //Funcion para enviar datos del hijo al padre, para pushear a la tabla
  @Output()
  addCursosSubmitted = new EventEmitter();
  mostrarFormulario: boolean = true;
  constructor(private fb: FormBuilder) {
    this.addCursosForm = this.fb.group({
      courseName: this.fb.control('', Validators.required),
      createdAt: this.fb.control('', Validators.required),
    });
  }
  //Funcion para evitar que no se mande el formulario sin haber completado y cuando se envia, con reset, reseteamos los campos
  onSubmit(): void {
    if (this.addCursosForm.invalid) {
      this.addCursosForm.markAllAsTouched();
    } else {
      this.addCursosSubmitted.emit(this.addCursosForm.value);
      this.addCursosForm.reset();
    }
  }



/*   onCourseSubmitted(ev: CursosService): void {
    //Angular material nos pide crear un nuevo array para poder refrescar la datasource de la tabla
    this.Curso = [...this.Curso, { ...ev, id: new Date().getTime() }];
    this.mostrarFormulario = false;
  } */
}
