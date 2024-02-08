import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  //Funcion para enviar datos del hijo al padre, para pushear a la tabla
  @Output()
  loginSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }
  //Funcion para evitar que no se mande el formulario sin haber completado y cuando se envia, con reset, reseteamos los campos
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.loginSubmitted.emit(this.loginForm.value);
      this.loginForm.reset();
    }
  }
}


