
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersComponent } from './pages/users/users.component';
import { UsersModule } from './pages/users/users.module';
import { PipesModule } from './pages/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../../app-routing.module';
import { CursosModule } from './pages/cursos/cursos.module';

 @NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    PipesModule,
    SharedModule,
    MatListModule,
    AppRoutingModule,
    CursosModule
  ],
  exports: [
    DashbordComponent
  ]
})
export class DashbordModule { }
