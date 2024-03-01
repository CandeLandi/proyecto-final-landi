import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { InscriptionsService } from './inscriptions.service';
import { Store } from '@ngrx/store';
import { selectInscription, selectInscriptionIsLoading } from './store/inscriptions.selectors';
import { Observable, Subscription } from 'rxjs';
import { NgIfContext } from '@angular/common';
import { InscriptionsActions } from './store/inscriptions.actions';
import { Inscription } from './store/models';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionsDialogComponent } from './components/inscriptions-dialog/inscriptions-dialog.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent implements OnDestroy {
  inscriptions: Inscription[] = [];
  subscriptions: Subscription[] = [];
  isLoading$: Observable<boolean>;

  constructor(private inscriptionsService: InscriptionsService,
    private store: Store, private matDialog: MatDialog) {

    this.subscriptions.push(
      this.store.select(selectInscription).subscribe({
        next: (inscriptions) => {
          this.inscriptions = inscriptions;
        },
      })

    )
    this.isLoading$ = this.store.select(selectInscriptionIsLoading)
    this.store.dispatch(InscriptionsActions.loadInscriptions());
  }
  createInscription(): void {
    this.matDialog.open(InscriptionsDialogComponent);
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}


