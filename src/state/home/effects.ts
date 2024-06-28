import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DbserviceService } from '../../service/dbservice.service';
import {
  loadDb, loadDbSuccess, loadDbFailure,
  queryDb, queryDbSuccess, queryDbFailure,
  clearDb, clearDbSuccess, clearDbFailure
} from './action';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private dbService: DbserviceService
  ) {}

  loadDb$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDb),
      mergeMap(() =>
        this.dbService.load().pipe(
          map(() => loadDbSuccess()),
          catchError(error => of(loadDbFailure({ error: error.message })))
        )
      )
    )
  );

  queryDb$ = createEffect(() =>
    this.actions$.pipe(
      ofType(queryDb),
      mergeMap(() =>
        this.dbService.query().pipe(
          map(customers => queryDbSuccess({ customers })),
          catchError(error => of(queryDbFailure({ error: error.message })))
        )
      )
    )
  );

  clearDb$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clearDb),
      mergeMap(() =>
        this.dbService.clear().pipe(
          map(() => clearDbSuccess()),
          catchError(error => of(clearDbFailure({ error: error.message })))
        )
      )
    )
  );
}
