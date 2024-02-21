import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MOCK_USER } from './auth.service';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('Servicio de autenticación', () => {
  let authService: AuthService;
  let router: Router;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [
        ToastrModule.forRoot(),
      ]
    });
    authService = TestBed.inject(AuthService)

    it('AuthService debe estar definido', () => {
      expect(authService).toBeTruthy();
    })

    describe('login', () => {
      it('debería navegar a cursos y almacenar el usuario al iniciar sesión', () => {
        const datosLogin = { email: MOCK_USER.email, password: MOCK_USER.password };
        const navigateSpy = spyOn(router, 'navigate');
        const storeSpy = spyOn(localStorage, 'setItem');

        authService.login(datosLogin);

        expect(navigateSpy).toHaveBeenCalledWith(['/cursos']);
        expect(storeSpy).toHaveBeenCalledWith('user', JSON.stringify(MOCK_USER));
      });


      it('debería abrir un toast con un mensaje de error al iniciar sesión incorrectamente', () => {
        const datosLoginIncorrectos = { email: 'correo@incorrecto.com', password: 'contraseñaIncorrecta' };
        const toastrSpy = spyOn(TestBed.inject(ToastrService), 'error');

        authService.login(datosLoginIncorrectos);

        expect(toastrSpy).toHaveBeenCalledWith('Error al iniciar sesión', 'Usuario o contraseña incorrectos');
      });

    });
  })
})
