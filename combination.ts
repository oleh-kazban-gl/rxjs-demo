import { from, interval, forkJoin, of, concat, timer, combineLatest } from 'rxjs';
import { merge, delay, withLatestFrom, map } from 'rxjs/operators';

// import { observableArray } from './create';

const first$ = interval(2500);
const second$ = interval(1000);

const source = ['one', 'two', 'three', 'four', 'five'];

const s1$ = of(1, 2, 3).pipe(delay(1000));
const s2$ = of(4, 5, 6).pipe(delay(3000));
const s3$ = of(7, 8, 9).pipe(delay(2000));

const timer1$ = timer(1000, 4000);
const timer2$ = timer(2000, 4000);
const timer3$ = timer(3000, 4000);

// https://rxmarbles.com/#merge
export const mergeCombination = first$
  .pipe(
    merge(second$)
  )

export const forkJoinCombination = forkJoin(source
  .map(value => of(value).pipe(delay(Math.random() * 5 * 1000)))
);

// https://rxmarbles.com/#concat
export const concatCombination = concat(s1$, s2$, s3$);

// https://rxmarbles.com/#combineLatest
export const combineLatestCombination = combineLatest(timer1$, timer2$, timer3$);

// https://rxmarbles.com/#withLatestFrom
export const withLatestCombination = first$
  .pipe(
    withLatestFrom(second$),
    map(([first, second]) => `First: ${first}, second: ${second}`)
  );