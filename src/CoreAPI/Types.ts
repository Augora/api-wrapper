interface IDeputy {
  // Fields from NosDeputes.fr
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

  // Custom fields
  image15: string;
  image30: string;
  image60: string;
  image120: string;
  nbMandatsTotaux: number;
  imageDynamic(height: number): string;
}

interface IDeputyHolder {
  depute: IDeputy;
}

interface IDeputies {
  deputes: [IDeputyHolder];
}
