import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { TittlesDirective } from './tittles.directive';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOptionModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';



const SHARED_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatOptionModule,
  MatSidenavModule,
  MatDialogModule
]

@NgModule({
  declarations: [FullNamePipe, TittlesDirective],
  imports: [
    CommonModule,
    SHARED_MODULES
  ],
  exports: [FullNamePipe,TittlesDirective, MatTableModule,
    SHARED_MODULES],
})
export class SharedModule {}
