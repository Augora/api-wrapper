interface IPoliticalGroups {
  organismes: [IPoliticalGroupHolder];
}

interface IPoliticalGroupHolder {
  organisme: IPoliticalGroup;
}

interface IPoliticalGroup {
  id: number;
  slug: string;
  nom: string;
  acronyme: string;
  groupe_actuel: boolean;
  couleur: string;
  order: number;
  type: string;
  url_nosdeputes: string;
  url_nosdeputes_api: string;
}

interface IParliamentaryBodies {
  organismes: [IParliamentaryBodyHolder];
}

interface IParliamentaryBodyHolder {
  organisme: IParliamentaryBody;
}

interface IParliamentaryBody {
  id: number;
  slug: string;
  nom: string;
  type: string;
  url_nosdeputes: string;
  url_nosdeputes_api: string;
}
