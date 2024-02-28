import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';

export const inscriptionsFeatureKey = 'inscriptions';

export interface State {
  inscriptions: [];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  inscriptions: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptions, (state) => ({ ...state, loading: true })),
  on(InscriptionsActions.loadInscriptionsSuccess, (state, action) => ({
    ...state,
    loading: false,
    sales: action.data
  })),
  on(InscriptionsActions.loadInscriptionsFailure, (state, action) => ({
    ...state,
  loading: false,
  error: action.error
  })),
);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});

