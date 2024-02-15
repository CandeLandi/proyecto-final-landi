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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatOptionModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

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
  MatDialogModule,
  MatToolbarModule,
  MatListModule,
  RouterModule,
  CommonModule,
  FormsModule,
  MatSelectModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [FullNamePipe, TittlesDirective, SidebarComponent],
  imports: [
    SHARED_MODULES
  ],
  exports: [FullNamePipe, TittlesDirective, MatTableModule,
    SHARED_MODULES, SidebarComponent],
})
export class SharedModule { }
