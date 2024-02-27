import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscriptionsActions } from './inscriptions.actions';
import { InscriptionsService } from '../inscriptions.service';


@Injectable()
export class InscriptionsEffects {

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(
      // filtramos solamente las acciones que nos interesan, en este caso solamete las acciones del tipo loadInscriptions

      ofType(InscriptionsActions.loadInscriptions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscriptionsService.getInscriptions().pipe(
          //Aca manejamos el succes
          map(data => InscriptionsActions.loadInscriptionsSuccess({ data })),
       //atrapa el error
          catchError(error => of(InscriptionsActions.loadInscriptionsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions,
    private inscriptionsService: InscriptionsService) { }
}
