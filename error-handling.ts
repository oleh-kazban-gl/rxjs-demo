import { throwError, of, interval } from "rxjs";
import { catchError, mergeMap, retry } from "rxjs/operators";

const source$ = interval(1000);

export const catchErrorHandler = throwError('ERROR')
  .pipe(
    catchError(error => of(`Error was caught: ${error}`))
  );

export const retryHandler = source$
  .pipe(
    mergeMap(value => value > 3 ? throwError(`Attempt: ${value}`) : of(value)),
    retry(3)
  )