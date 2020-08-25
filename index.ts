import {
  sampleObservable,
  intervalObservable,
  timerObservable
} from './create';
import {
  mapTransform,
  reduceTransform,
  pluckTransform,
  concatMapTransform,
  mergeMapTransform,
  exhaustMapTransform
} from './transform';
import {
  filterTransform,
  debounceTransform,
  distinctTransform,
  distinctUntilChangedTransform,
  findTransform,
  firstTransform,
  lastTransform,
  singleTransform,
  skipTransform,
  skipUntilTransform,
  skipWhileTransform,
  takeTransform,
  takeUntilTransform,
  takeWhileTransform
} from './filter';
import {
  everyConditional,
  evenConditional
} from './conditional';
import {
  mergeCombination,
  forkJoinCombination,
  concatCombination,
  combineLatestCombination,
  withLatestCombination
} from './combination';
import {
  tapUtility,
  delayUtility
} from './utility';
import {
  catchErrorHandler,
  retryHandler
} from './error-handling';
import {
  subject$,
  behaviorSubject$,
  replaySubject$,
  asyncSubject$
} from './subject';

// Get subscription
// const subscription = sampleObservable
//   .subscribe(
//     result => {
//       console.log('sampleObservable: ', result);
//     },
//     error => {
//       console.error('error: ', error);
//     },
//     () => {
//       console.info('Done');
//     }
//   );

// intervalObservable.subscribe(value => {
//   console.log('value: ', value);
// });
// timerObservable.subscribe(value => {
//   console.log('value: ', value);
// });

// Handle resources
// subscription.unsubscribe();

// retryHandler
//   .subscribe(result => {
//     console.log('result: ', result);
//   });

// Handle subjects
// Subject
// subject$.subscribe(value => { console.log('Subscriber A: ', value); })
// subject$.next(1);
// subject$.subscribe(value => { console.log('Subscriber b: ', value); })
// subject$.next(2);

// BehaviorSubject
// behaviorSubject$.subscribe(value => { console.log('Subscriber A: ', value); })
// behaviorSubject$.next(2);
// behaviorSubject$.subscribe(value => { console.log('Subscriber b: ', value); })
// behaviorSubject$.next(3);

// ReplaySubject
// replaySubject$.next(1);
// replaySubject$.next(2);
// replaySubject$.subscribe(value => { console.log('Subscriber A: ', value); });
// replaySubject$.next(3);
// replaySubject$.next(4);
// replaySubject$.subscribe(value => { console.log('Subscriber B: ', value); });

// AsyncSubject
// asyncSubject$.subscribe(value => { console.log('Subscriber A: ', value); });
// asyncSubject$.next(123);
// asyncSubject$.subscribe(value => { console.log('Subscriber B: ', value); });
// asyncSubject$.next(456);
// asyncSubject$.complete();