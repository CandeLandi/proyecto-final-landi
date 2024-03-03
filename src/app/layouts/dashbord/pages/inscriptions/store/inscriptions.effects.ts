import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, pipe } from 'rxjs';
import { InscriptionsActions } from './inscriptions.actions';
import { InscriptionsService } from '../inscriptions.service';
import { UsersService } from '../../users/users.service';
import { CursosService } from '../../cursos/cursos.service';


@Injectable()
export class InscriptionsEffects {

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionsActions.loadInscriptions),
      concatMap(() =>
        this.inscriptionsService.getInscriptions().pipe(
          map(data => InscriptionsActions.loadInscriptionsSuccess({ data })),
          catchError(error => of(InscriptionsActions.loadInscriptionsFailure({ error }))))
      )
    );
  });

  loadSubscribers$ = createEffect(() => {
    return this.actions$.pipe(ofType(InscriptionsActions.loadSubscribers),
      concatMap(() => this.usersService.getAllSubscribers().pipe
        (map((resp) => InscriptionsActions.loadSuscribersSuccess({ data: resp })),
          catchError((error) => {
            return of(InscriptionsActions.loadSuscribersFailure({ error }))
          })
        )
      )
    )
  })


  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionsActions.loadCourses),
      concatMap(() => {
        return this.cursosService.getCursos().pipe(
          map((resp) => InscriptionsActions.loadCoursesSuccess({ data: resp })),
          catchError((error) => of(InscriptionsActions.loadCoursesFailure({ error })))
        )
        9
      })
    )
  })

  createInscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionsActions.createInscription),
      concatMap((action: any) => {
        return this.inscriptionsService.createInscription(action.data).pipe(
          map((resp) => InscriptionsActions.createInscriptionSuccess({ data: resp })),
          catchError((error) => of(InscriptionsActions.createInscriptionFailure({ error })))
        );
      })
    );
  });

  createInscriptionSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionsActions.createInscriptionSuccess),
      map(() => InscriptionsActions.loadInscriptions())
    );
  });



  constructor(private actions$: Actions,
    private inscriptionsService: InscriptionsService,
    private usersService: UsersService,
    private cursosService: CursosService) { }
}
