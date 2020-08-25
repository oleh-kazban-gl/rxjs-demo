import { every } from 'rxjs/operators';

import { observableArray } from './create';

// https://rxmarbles.com/#every
export const everyConditional = observableArray
  .pipe(
    every(value => value > 0)
  );

// https://rxmarbles.com/#every
export const evenConditional = observableArray
  .pipe(
    every((value: number) => value % 2 === 0)
  );
