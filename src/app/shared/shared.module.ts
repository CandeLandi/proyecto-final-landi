import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { TittlesDirective } from './tittles.directive';

@NgModule({
  declarations: [FullNamePipe, TittlesDirective],
  imports: [CommonModule],
  exports: [FullNamePipe,TittlesDirective ],
})
export class SharedModule {}
