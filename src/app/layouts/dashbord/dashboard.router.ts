import { UsersModule } from './pages/users/users.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { authGuard } from '../../core/guards/auth.guard';
import { InscriptionsModule } from './pages/inscriptions/inscriptions.module';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
    loadChildren: () =>
      import('../auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'cursos',
    component: CursosComponent,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((m) => m.CursosModule)
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'inscriptions',
    component: InscriptionsComponent,
    loadChildren: () =>
      import('./pages/inscriptions/inscriptions.module').then((m) => m.InscriptionsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
