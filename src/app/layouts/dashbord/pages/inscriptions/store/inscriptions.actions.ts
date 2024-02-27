import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: unknown }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
  }
});
