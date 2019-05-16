import { getFromUrl } from "../Utils/APICall";
import { AxiosResponse } from "axios";
import "./ParliamentaryDebates.Types";

export enum LegislativeFilesOrderBy {
  Alphanumeric = "nom",
  Date = "date",
  Activity = "plus",
}

export function getLegislativeFiles(
  orderBy: LegislativeFilesOrderBy = LegislativeFilesOrderBy.Activity
) {
  return getFromUrl(
    `https://www.nosdeputes.fr/15/dossiers/${orderBy}/json`
  ).then((r: AxiosResponse<ISections>) => r.data);
}

export function getLegislativeFileDetails(id: number) {
  return getFromUrl(`https://www.nosdeputes.fr/15/dossier/${id}/json`).then(
    (r: AxiosResponse<IDetailedSection>) => r.data
  );
}

export default {
  getLegislativeFiles,
  getLegislativeFileDetails,
  LegislativeFilesOrderBy,
};
