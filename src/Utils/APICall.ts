import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import axios from 'axios';

export interface IFromPromise extends Function {
  (promise: Promise<any>): Observable<any>;
}

export interface IPromiseToObservable extends Function {
  (fromPromise : IFromPromise, promise : Promise<any>) : Observable<any>;
}

export interface IAxiosGet extends Function {
  (url: string, config: object): any;
}

export function promiseToObservable(fromPromise : IFromPromise,
                                    promise : Promise<any>)
                                    : Observable<any> {
  return fromPromise(promise);
}

export function promiseToObservableFactory(fromPromise: IFromPromise) {
  return promiseToObservable.bind(undefined, fromPromise);
}

export const localProvidedPromiseToObservable = promiseToObservableFactory(Observable.fromPromise);

export function getAsObservable(axiosGet : IAxiosGet,
                                promiseToObservableFunc: IFromPromise,
                                url: string, config: object)
                                : Observable<any> {
  const axiosPromise = axiosGet(url, config);
  return promiseToObservableFunc(axiosPromise);
}

export function getAsObservableFactory(axiosGet : IAxiosGet,
                                       promiseToObservableFunc : IFromPromise) {
  return getAsObservable.bind(undefined, axiosGet, promiseToObservableFunc);
}

export const providedGetAsObservable = getAsObservableFactory(axios.get,
                                                              localProvidedPromiseToObservable);

export const get = providedGetAsObservable;

export default promiseToObservableFactory(Observable.fromPromise);
