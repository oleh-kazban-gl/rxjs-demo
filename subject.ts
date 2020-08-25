import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";

// https://www.learnrxjs.io/learn-rxjs/subjects/subject
export const subject$ = new Subject();

// https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject
export const behaviorSubject$ = new BehaviorSubject(123);

// https://www.learnrxjs.io/learn-rxjs/subjects/replaysubject
export const replaySubject$ = new ReplaySubject(3);

// https://www.learnrxjs.io/learn-rxjs/subjects/asyncsubject
export const asyncSubject$ = new AsyncSubject();