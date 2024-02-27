import { Component } from '@angular/core';
import { InscriptionsService } from './inscriptions.service';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from './store/inscriptions.actions';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent {

  constructor(private inscriptionsService: InscriptionsService,
    private store: Store ){

      this.store.dispatch(InscriptionsActions.loadInscriptions());
    }
}


