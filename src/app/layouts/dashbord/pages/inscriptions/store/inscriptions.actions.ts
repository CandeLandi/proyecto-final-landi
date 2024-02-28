import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscription } from './models';

export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Inscription[]}>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
  }
});
