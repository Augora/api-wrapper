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

export async function getAmendmentsOnText(textId: number) {
  const r = await getFromUrl<IAmendmentsHolder>(
    `https://www.nosdeputes.fr/15/amendements/${textId}/json`
  );
  return r.data.amendements.map(a => a.amendement);
}

export async function getInterventionsOfASession(sessionId: number) {
  const r = await getFromUrl<ISession>(
    `https://www.nosdeputes.fr/15/seance/${sessionId}/json`
  );
  return r.data.seance.map(a => a.intervention);
}

export default {
  getLegislativeFiles,
  getLegislativeFileDetails,
  LegislativeFilesOrderBy,
  getAmendmentsOnText,
  getInterventionsOfASession,
};
