import { getFromUrl } from "../Utils/APICall";
import "./ParliamentaryDebates.Types";

export enum LegislativeFilesOrderBy {
  Alphanumeric = "nom",
  Date = "date",
  Activity = "plus",
}

export async function getLegislativeFiles(
  orderBy: LegislativeFilesOrderBy = LegislativeFilesOrderBy.Activity
) {
  const r = await getFromUrl<ISections>(
    `https://www.nosdeputes.fr/15/dossiers/${orderBy}/json`
  );
  return r.data;
}

export async function getLegislativeFileDetails(id: number) {
  const r = await getFromUrl<IDetailedSection>(
    `https://www.nosdeputes.fr/15/dossier/${id}/json`
  );
  return r.data;
}

export default {
  getLegislativeFiles,
  getLegislativeFileDetails,
  LegislativeFilesOrderBy,
};
