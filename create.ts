import { Observable, from, of, throwError, interval, timer } from "rxjs";

// Create an Observable
export const sampleObservable = new Observable(observer => {
  observer.next('1 sync');
  observer.next('2 sync');
  observer.next('3 sync');

  setTimeout(() => {
    observer.next('4 async 1 sec');
  }, 1000);
  setTimeout(() => {
    observer.next('5 async 3 sec');
  }, 3000);

  // observer.complete();
});
export const observableFrom = from('https://api.github.com/users/');
export const observableOf = of({
  user: {
    firstName: 'Oleh',
    lastName: 'Kazban'
  },
  authorities: ['USER', 'SYSTEM_ADMIN'],
  uuid: '57b81599-ec38-4c6c-83f0-68a3f71bbee1'
});
export const observableArray = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
export const observableUsersArray = from([
  { name: 'John', age: 30 },
  { name: 'Mike', age: 40 },
]);
export const intervalObservable = interval(1000);
export const timerObservable = timer(5000, 1000);
