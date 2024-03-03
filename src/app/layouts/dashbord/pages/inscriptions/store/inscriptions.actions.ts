import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateInscriptionData, Inscription } from './models';
import { User } from '../../users/models';
import { Curso } from '../../cursos/models';


export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: any }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
    'Load Subscribers': emptyProps(),
    'Load Suscribers Success': props<{ data: any }>(),
    'Load Suscribers Failure': props<{ error: unknown }>(),
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: Curso[] }>(),
    'Load Courses Failure': props<{ error: unknown }>(),
    'Create Inscription': props<{ data: CreateInscriptionData }>(),
    'Create Inscription Success': props<{ data: any }>(),
    'Create Inscription Failure': props<{ error: unknown }>(),
  },
});
