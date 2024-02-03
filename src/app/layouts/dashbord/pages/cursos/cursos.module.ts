import { Curso } from './models/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { MatTableModule } from '@angular/material/table';
import { CursosService } from './cursos.service';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CursosComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule,
    PipesModule,
    SharedModule
  ],
  exports: [
    CursosComponent,
  ],
  providers: [
    CursosService,
  ]
})
export class CursosModule { }
