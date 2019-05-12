import axios from "axios";
import { AxiosPromise } from "axios";

export function getFromUrl(url: string): AxiosPromise {
  return axios({
    method: "get",
    url
  });
}
