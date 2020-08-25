import { interval } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

const interval$ = interval(1000);

export const tapUtility = interval$
  .pipe(
    tap(() => {
      console.log('Do something');
    })
  )

export const delayUtility = interval$
  .pipe(
    delay(3000)
  )