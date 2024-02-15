import { Curso } from './models/index';
import { NgModule } from '@angular/core';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { MatTableModule } from '@angular/material/table';
import { CursosService } from '../../../../core/services/cursos.service';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../../../../shared/shared.module';
import { FormCursosComponent } from './components/form-cursos/form-cursos.component';
import { TableCursosComponent } from './components/table-cursos/table-cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    FormCursosComponent,
    TableCursosComponent,
  ],
  imports: [
    CursosRoutingModule,
    MatTableModule,
    PipesModule,
    SharedModule,
  ],
  exports: [
    CursosComponent,
  ],
  providers: [
    CursosService,
  ]
})
export class CursosModule { }
