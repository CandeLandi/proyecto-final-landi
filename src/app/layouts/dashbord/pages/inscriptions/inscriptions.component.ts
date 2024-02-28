import { Component, TemplateRef } from '@angular/core';
import { InscriptionsService } from './inscriptions.service';
import { Store } from '@ngrx/store';
import { selectInscription, selectInscriptionIsLoading } from './store/inscriptions.selectors';
import { Observable } from 'rxjs';
import { NgIfContext } from '@angular/common';
import { InscriptionsActions } from './store/inscriptions.actions';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent {
  inscriptions$: any;
  isLoading$: Observable<boolean>;

  constructor(private inscriptionsService: InscriptionsService,
    private store: Store) {
    this.inscriptions$ = this.store.select(selectInscription)
    this.isLoading$ = this.store.select(selectInscriptionIsLoading)
    this.store.dispatch(InscriptionsActions.loadInscriptions());
  }
}


