interface ICustomDeputyFields {
  image15: string;
  image30: string;
  image60: string;
  image120: string;
  nbMandatsTotaux: number;
  imageDynamic(height: number): string;
}

interface IMinimalDeputy {
  id: number;
  nom: string;
  nom_de_famille: string;
  prenom: string;
  sexe: string;
  date_naissance: string;
  lieu_naissance: string;
  num_deptmt: string;
  nom_circo: string;
  num_circo: number;
  mandat_debut: string;
  groupe_sigle: string;
  parti_ratt_financier: string;
  sites_web: [string];
  emails: [string];
  adresses: [string];
  collaborateurs: [string];
  anciens_mandats: [string];
  autres_mandats: [string];
  anciens_autres_mandats: [string];
  profession: string;
  place_en_hemicycle: string;
  url_an: string;
  id_an: string;
  slug: string;
  url_nosdeputes: string;
  url_nosdeputes_api: string;
  nb_mandats: number;
  twitter: string;
}

interface IMinimalDetailedDeputy extends IMinimalDeputy {
  groupe: {
    organisme: string;
    fonction: string;
    debut_fonction: string;
  };
  responsabilites: {
    organisme: string;
    fonction: string;
    debut_fonction: string;
  };
  responsabilites_extra_parlementaires: {
    organisme: string;
    fonction: string;
    debut_fonction: string;
  };
  groupes_parlementaires: {
    organisme: string;
    fonction: string;
    debut_fonction: string;
  };
  historique_responsabilites: {
    organisme: string;
    fonction: string;
    debut_fonction: string;
    fin_fonction: string;
  };
}

interface IDetailedDeputyHolder {
  depute: IDetailedDeputy;
}

interface IDeputyHolder {
  depute: IMinimalDeputy;
}

interface IDeputies {
  deputes: [IDeputyHolder];
}

interface IDeputy extends IMinimalDeputy, ICustomDeputyFields {}
interface IDetailedDeputy extends IMinimalDetailedDeputy, ICustomDeputyFields {}
