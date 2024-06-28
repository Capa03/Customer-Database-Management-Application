import { createReducer, on } from '@ngrx/store';
import { Customer } from '../../interface/customer-interface';
import {
  loadDb, loadDbSuccess, loadDbFailure,
  queryDb, queryDbSuccess, queryDbFailure,
  clearDb, clearDbSuccess, clearDbFailure
} from './action';

type Status = 'Loading' | 'Failed' | 'Loaded' | 'Pending';

export interface CustomerState {
  customers: Customer[];
  error: string;
  status: string;
}

export const initialState: CustomerState = {
  customers: [],
  error: '',
  status: 'Pending'
};

export const dbReducer = createReducer(
  initialState,

  //Load DB
  on(loadDb, state => ({ ...state, status: 'Loading' })),

  on(loadDbSuccess, (state) => ({
    ...state,
    status: 'Loaded'
  })),

  on(loadDbFailure, (state, { error }) => ({
     ...state, error, status: 'Failed'
    })),


//Query DB
  on(queryDb, state => ({ ...state, status: 'Loading' })),

  on(queryDbSuccess, (state, { customers }) => ({
     ...state, customers, status: 'Loaded'
    })),
  on(queryDbFailure, (state, { error }) => ({ ...state, error, status: 'Failed' })),

  //Query DB
  on(clearDb, state => ({ ...state, status: 'Loading' })),
  on(clearDbSuccess, state => ({ ...state, customers: [], status: 'Loaded' })),
  on(clearDbFailure, (state, { error }) => ({ ...state, error, status: 'Failed' }))
);
