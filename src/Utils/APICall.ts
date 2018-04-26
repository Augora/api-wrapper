import axios from "axios";
import { AxiosRequestConfig, AxiosPromise } from "axios";

export function getFromUrl(url: string): AxiosPromise {
  return axios({
    method: "get",
    url
  });
}
