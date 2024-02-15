import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
      this.authService.login(this.loginForm.value)
    }
  }
}


