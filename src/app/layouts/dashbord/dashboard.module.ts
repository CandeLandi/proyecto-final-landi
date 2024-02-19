import { NgModule } from '@angular/core';
import { UsersModule } from './pages/users/users.module';
import { PipesModule } from './pages/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    UsersModule,
    PipesModule,
    SharedModule,
    CursosModule,
    RouterModule,
    DashboardRoutingModule
  ],
  exports: [
  ],
})
export class DashboardModule { }
