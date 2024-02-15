import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashbord/dashboard.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () =>
      import('./layouts/dashbord/dashboard.module').then((m) => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
