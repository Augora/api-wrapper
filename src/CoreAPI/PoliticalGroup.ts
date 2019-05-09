import { getFromUrl } from "../Utils/APICall";
import "./Types";
import { AxiosResponse } from "axios";

function getPoliticalGroups() {
  return getFromUrl(`https://www.nosdeputes.fr/organismes/groupe/json`)
    .then((r: AxiosResponse<IPoliticalGroup>) => r.data);
}

export default {
  getPoliticalGroups
}