import axios, { AxiosPromise } from "axios";

export function getFromUrl<T = any>(url: string): AxiosPromise<T> {
  return axios({
    method: "get",
    url,
  });
}
