import axios, { AxiosPromise } from "axios";

export function getFromUrl(url: string): AxiosPromise {
  return axios({
    method: "get",
    url,
  });
}
