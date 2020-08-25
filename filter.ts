import { timer, from, of, interval } from 'rxjs';
import { filter, debounce, distinct, find, first, last, single, skip, skipUntil, skipWhile, take, takeUntil, takeWhile } from 'rxjs/operators';

import { observableArray, observableUsersArray, observableFrom } from './create';

// https://rxmarbles.com/#filter
export const filterTransform = observableArray
  .pipe(
    filter((value: number) => value % 2 === 0)
  );

// https://rxmarbles.com/#debounce
export const debounceTransform = observableFrom
  .pipe(
    debounce(() => timer(1000))
  );

// https://rxmarbles.com/#distinct
export const distinctTransform = from([].concat([0, 1, 2, 3, 4, 5]).concat([2, 3, 4]).concat([5, 6, 7, 8, 9]))
  .pipe(
    distinct()
  );

// https://rxmarbles.com/#distinctUntilChanged
let source = {
	user: {
		firstName: 'John',
		lastName: 'Doe'
	},
	authorities: ['USER', 'SYSTEM_ADMIN'],
	uuid: '57b81599-ec38-4c6c-83f0-68a3f71bbee1'
};
export const distinctUntilChangedTransform = from([
  source,
  {...source, user: null, authorities: []},
  source
  ])
  .pipe(
    distinct()
  );

// https://rxmarbles.com/#find
export const findTransform = observableArray
  .pipe(
    find((value: number) => value > 3)
  );

// https://rxmarbles.com/#first
export const firstTransform = observableArray
  .pipe(
    first(),
    // first((value: number) => value > 3)
  );

// https://rxmarbles.com/#last
export const lastTransform = observableArray
  .pipe(
    last(),
    // last((value: number) => value < 3)
  );

export const singleTransform = observableArray
  .pipe(
    single(value => value === 4)
  );

// https://rxmarbles.com/#skip
export const skipTransform = observableArray
  .pipe(
    skip(2)
  );

// https://rxmarbles.com/#skipUntil
const source$ = interval(1000);
const timer$ = timer(5000);
export const skipUntilTransform = source$
  .pipe(
    skipUntil(timer$)
  );

// https://rxmarbles.com/#skipWhile
export const skipWhileTransform = source$
  .pipe(
    skipWhile(value => value < 4)
  );

// https://rxmarbles.com/#take
export const takeTransform = observableArray
  .pipe(
    take(5)
  );

// https://rxmarbles.com/#takeUntil
export const takeUntilTransform = source$
  .pipe(
    takeUntil(timer$)
  );

// https://rxmarbles.com/#takeWhile
export const takeWhileTransform = source$
  .pipe(
    takeWhile(value => value < 5)
  );
