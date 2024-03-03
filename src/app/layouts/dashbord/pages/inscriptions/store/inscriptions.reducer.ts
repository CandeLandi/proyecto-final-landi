import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';
import { User } from '../../users/models';
import { Curso } from '../../cursos/models';

export const inscriptionsFeatureKey = 'inscriptions';

export interface State {
  inscriptions: [];
  cursos: Curso[];
  subscribers: User[];
  loadingSubscribers: boolean,
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  inscriptions: [],
  subscribers: [],
  cursos: [],
  loadingSubscribers: false,
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptions, (state) => ({ ...state, loading: true })),
  on(InscriptionsActions.loadInscriptionsSuccess, (state, action) => ({
    ...state,
    loading: false,
    sales: action.data,
  })),
  on(InscriptionsActions.loadInscriptionsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(InscriptionsActions.loadSubscribers, (state) => {
    return {
      ...state,
      loadingBuyers: true,
    };
  }),
  on(InscriptionsActions.loadSuscribersSuccess, (state, action) => {
    return {
      ...state,
      loadingBuyers: false,
      subscribers: action.data,
    };
  }),
  on(InscriptionsActions.loadCoursesSuccess, (state, action) => ({
    ...state,
    cursos: action.data,
  })),

);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});

