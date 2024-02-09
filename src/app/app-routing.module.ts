import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashbord/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () =>
      import('./layouts/dashbord/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
