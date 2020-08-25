import { of, interval } from 'rxjs';
import { map, reduce, pluck, concatMap, mergeMap, exhaustMap, delay, take } from 'rxjs/operators';

import { observableArray, observableUsersArray } from './create';

// https://rxmarbles.com/#map
export const mapTransform = observableArray
  .pipe(
    map((value: number) => value * 10)
  );

// https://rxmarbles.com/#reduce
export const reduceTransform = observableArray
  .pipe(
    reduce((accumulator: number, value: number) => accumulator + value)
  );

// https://rxmarbles.com/#pluck
export const pluckTransform = observableUsersArray
  .pipe(
    pluck('name')
  );

// https://rxmarbles.com/#concatMap
export const concatMapTransform = of(1000, 2000)
  .pipe(
    concatMap(val => of(`Delayed by: ${val} ms`).pipe(delay(val)))
  )

// https://rxmarbles.com/#mergeMap
export const mergeMapTransform = of(1000, 2000)
  .pipe(
    delay(5000),
    mergeMap(val => of(`Delayed by: ${val} ms`).pipe(delay(val)))
  )

const firstInterval = interval(1000).pipe(take(10));
const secondInterval = interval(1000).pipe(take(2));
export const exhaustMapTransform = firstInterval
  .pipe(
    exhaustMap(f => {
      console.log(`Emission Corrected of first interval: ${f}`);
      return secondInterval;
    })
  );

