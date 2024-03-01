import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';
import { User } from '../../users/models';

export const inscriptionsFeatureKey = 'inscriptions';

export interface State {
  inscriptions: [];
  subscribers: User[];
  loadingSubscribers: boolean,
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  inscriptions: [],
  subscribers: [],
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
    sales: action.data
  })),
  on(InscriptionsActions.loadInscriptionsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  })),
  on(InscriptionsActions.loadSubscribers, (state) => {
    return {
      ...state,
      loadingSubscribers: true
    };
  }
  ));
  on(InscriptionsActions.loadSuscribersSuccess, (state, action) => {
    return {
    ...state,
    loadingSubscribers: false,
    subscribers: action.data,
    }
  })

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});

