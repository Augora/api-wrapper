interface ISections {
  sections: [ISection];
}

interface ISection {
  id: number;
  id_dossier_institution: string;
  titre: string;
  min_date: string;
  max_date: string;
  nb_interventions: number;
  url_institution: string;
  url_nosdeputes: string;
  url_nosdeputes_api: string;
}

interface IDetailedSection {
  section: {
    id: number;
    id_dossier_institution: string;
    titre: string;
    min_date: string;
    max_date: string;
    nb_interventions: number;
    url_institution: string;
    url_nosdeputes: string;
    url_nosdeputes_api: string;
    seances: [ISeance];
    documents: [IDocument];
    intervenants: [IParlementaire];
    soussections: [ISousSection];
  };
}

interface ISeance {
  seance: {
    id: string;
    type: string;
    date: string;
    heure: string;
    session: string;
    organisme: string;
    url_nosdeputes: string;
    url_nosdeputes_api: string;
  };
}

interface IDocument {
  document: {
    id: string;
    numero: string;
    annexe: string;
    type: string;
    type_details: string;
    titre: string;
    date: string;
    source: string;
    signataires: string;
    url_nosdeputes: string;
    url_nosdeputes_api: string;
  };
}

interface IParlementaire {
  parlementaire: {
    nom: string;
    slug: string;
    nb_interventions: string;
    url_nosdeputes: string;
  };
}

interface ISousSection {
  soussection: {
    id: string;
    titre: string;
    min_date: string;
    max_date: string;
    timestamp: string;
    url_nosdeputes: string;
    url_nosdeputes_api: string;
  };
}
