import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MOCK_USER } from './auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Servicio de autenticación', () => {
  let service: AuthService;
  let router: Router;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule],
      providers: [AuthService, localStorage],
    });

    describe('login', () => {
      it('debería navegar a cursos y almacenar el usuario al iniciar sesión', () => {
        const datosLogin = { email: MOCK_USER.email, password: MOCK_USER.password };
        service.login(datosLogin);
      });

      it('debería abrir un toast con un mensaje de error al iniciar sesión incorrectamente', () => {
        const datosLoginIncorrectos = { email: 'correo@incorrecto.com', password: 'contraseñaIncorrecta' };
        service.login(datosLoginIncorrectos);
      });
    });
  })
})
