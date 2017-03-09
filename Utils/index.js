const RxJS = require('rxjs')
const axios = require('axios')

function promiseToObservable (fromPromise, promise) {
  return fromPromise(promise)
}

function promiseToObservableFactory (fromPromise) {
  return promiseToObservable.bind(undefined, fromPromise)
}

const providedPromiseToObservable = promiseToObservableFactory(RxJS.Observable.fromPromise)

function getAsObservable (axiosGet, promiseToObservable, url, config) {
  const axiosPromise = axiosGet(url, config)
  return promiseToObservable(axiosPromise)
}

function getAsObservableFactory (axiosGet, promiseToObservable) {
  return getAsObservable.bind(undefined, axiosGet, promiseToObservable)
}

const providedGetAsObservable = getAsObservableFactory(axios.get, providedPromiseToObservable)

module.exports = {
  promiseToObservable,
  promiseToObservableFactory,
  providedGetAsObservable,
  get: providedGetAsObservable,
  default: promiseToObservableFactory(RxJS.Observable.fromPromise)
}
