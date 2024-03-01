import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from '../../store/inscriptions.actions';
import { Observable } from 'rxjs';
import { User } from '../../../users/models';
import { selectInscriptionsSubscribers } from '../../store/inscriptions.selectors';

@Component({
  selector: 'app-inscriptions-dialog',
  templateUrl: './inscriptions-dialog.component.html',
  styleUrl: './inscriptions-dialog.component.scss'
})
export class InscriptionsDialogComponent {

subscribers$: Observable<User[]>


constructor( private store: Store){
  this.store.dispatch(InscriptionsActions.loadSubscribers());
this.subscribers$= this.store.select(selectInscriptionsSubscribers);

}
}
