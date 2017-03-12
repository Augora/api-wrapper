const RxJS = require('rxjs');
const axios = require('axios');

function promiseToObservable(fromPromise, promise) {
  return fromPromise(promise);
}

function promiseToObservableFactory(fromPromise) {
  return promiseToObservable.bind(undefined, fromPromise);
}

const localProvidedPromiseToObservable = promiseToObservableFactory(RxJS.Observable.fromPromise);

function getAsObservable(axiosGet, promiseToObservableFunc, url, config) {
  const axiosPromise = axiosGet(url, config);
  return promiseToObservableFunc(axiosPromise);
}

function getAsObservableFactory(axiosGet, promiseToObservableFunc) {
  return getAsObservable.bind(undefined, axiosGet, promiseToObservableFunc);
}

const providedGetAsObservable = getAsObservableFactory(axios.get, localProvidedPromiseToObservable);

module.exports = {
  promiseToObservable,
  promiseToObservableFactory,
  getAsObservable,
  getAsObservableFactory,
  providedGetAsObservable,
  get: providedGetAsObservable,
  default: promiseToObservableFactory(RxJS.Observable.fromPromise),
};
