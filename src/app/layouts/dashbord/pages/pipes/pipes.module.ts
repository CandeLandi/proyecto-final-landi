import { NgModule } from '@angular/core';

import { PipesComponent } from './pipes.component';
import { FullNamePipe } from '../../../../shared/full-name.pipe';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [PipesComponent],
  imports: [
SharedModule
    ],
  exports: [PipesComponent],
})
export class PipesModule {}