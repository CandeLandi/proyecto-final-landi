import { TestBed } from '@angular/core/testing';
import { Validators } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../../shared/shared.module';
import { MockProvider } from 'ng-mocks';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule],
      providers: [MockProvider(AuthService)],
    });

    component = TestBed.createComponent(LoginComponent).componentInstance;
  });

  it('El LoginComponent debe instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El email y la contrasena deben ser campos requeridos', () => {
    expect(
      component.loginForm.get('password')?.hasValidator(Validators.required)
    ).toBeTrue();
    expect(
      component.loginForm.get('email')?.hasValidator(Validators.required)
    ).toBeTrue();
  });

  it('Si el formulario es invalido y al llamar submit este debe marcar sus campos como touched', () => {
    component.loginForm.patchValue({
      email: '',
      password: '',
    });

    expect(component.loginForm.invalid).toBeTrue();

    const spyOnMarkAllAsTouched = spyOn(
      component.loginForm,
      'markAllAsTouched'
    );

    component.onSubmit();

    expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
  });
});
