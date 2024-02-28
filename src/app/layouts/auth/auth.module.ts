import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { ValidationErrorsPipe } from '../../shared/validation-errors.pipe';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class AuthModule { }
