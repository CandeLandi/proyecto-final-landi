import { UsersModule } from './pages/users/users.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { LoginComponent } from '../auth/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    loadChildren: () =>
      import('../auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'cursos',
    component: CursosComponent,
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((m) => m.CursosModule)
  },
  {
    path: 'users',
    component: UsersComponent,
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }