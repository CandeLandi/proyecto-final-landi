import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from '../../store/inscriptions.actions';
import { Observable } from 'rxjs';
import { User } from '../../../users/models';
import { selectInscriptionCourses, selectInscriptionsSubscribers } from '../../store/inscriptions.selectors';
import { Curso } from '../../../cursos/models';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inscriptions-dialog',
  templateUrl: './inscriptions-dialog.component.html',
  styleUrl: './inscriptions-dialog.component.scss'
})
export class InscriptionsDialogComponent {

  subscribers$!: Observable<User[]>;
  cursos$!: Observable<Curso[]>;

  inscriptionForm!: FormGroup;

  constructor(private store: Store, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<InscriptionsDialogComponent>
  ) {
  }

  ngOnInit(): void {
    this.inscriptionForm = new FormGroup({
      "userId": new FormControl(""),
      "courseId": new FormControl(""),
    });

    if (this.data?.inscription) {
      this.inscriptionForm.get('userId')?.setValue(this.data.inscription.userId)
      this.inscriptionForm.get('courseId')?.setValue(this.data.inscription.courseId)
    }


    this.store.dispatch(InscriptionsActions.loadSubscribers());
    this.store.dispatch(InscriptionsActions.loadCourses());

    this.cursos$ = this.store.select(selectInscriptionCourses);
    this.subscribers$ = this.store.select(selectInscriptionsSubscribers);
  }

  onSubmit(): void {
    console.log(this.inscriptionForm.value);
    if (this.inscriptionForm.invalid) {
      this.inscriptionForm.markAllAsTouched();
    } else {
      this.store.dispatch(
        InscriptionsActions.createInscription({ data: this.inscriptionForm.value })
      );
      this.matDialogRef.close();
    }
  }
}
