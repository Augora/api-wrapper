import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import axios from 'axios';

export function promiseToObservable(fromPromise, promise) {
  return fromPromise(promise);
}

export function promiseToObservableFactory(fromPromise) {
  return promiseToObservable.bind(undefined, fromPromise);
}

export const localProvidedPromiseToObservable = promiseToObservableFactory(Observable.fromPromise);

export function getAsObservable(axiosGet, promiseToObservableFunc, url, config) {
  const axiosPromise = axiosGet(url, config);
  return promiseToObservableFunc(axiosPromise);
}

export function getAsObservableFactory(axiosGet, promiseToObservableFunc) {
  return getAsObservable.bind(undefined, axiosGet, promiseToObservableFunc);
}

export const providedGetAsObservable = getAsObservableFactory(
  axios.get,
  localProvidedPromiseToObservable);

export const get = providedGetAsObservable;

export default promiseToObservableFactory(Observable.fromPromise);
