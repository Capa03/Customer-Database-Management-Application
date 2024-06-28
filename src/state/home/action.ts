import { createAction, props } from '@ngrx/store';
import { Customer } from '../../interface/customer-interface';

// Load DB Actions
export const loadDb = createAction('[Customer] Load DB');
export const loadDbSuccess = createAction('[Customer] Load DB Success');
export const loadDbFailure = createAction('[Customer] Load DB Failure', props<{ error: string }>());

// Query DB Actions
export const queryDb = createAction('[Customer] Query DB');
export const queryDbSuccess = createAction('[Customer] Query DB Success', props<{ customers: Customer[] }>());
export const queryDbFailure = createAction('[Customer] Query DB Failure', props<{ error: string }>());

// Clear DB Actions
export const clearDb = createAction('[Customer] Clear DB');
export const clearDbSuccess = createAction('[Customer] Clear DB Success');
export const clearDbFailure = createAction('[Customer] Clear DB Failure', props<{ error: string }>());
