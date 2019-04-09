import { assign } from 'lodash';

function getSafeArrayLength(array: any[]): number {
  return array ? array.length : 0;
}

// ToDo: change any type to a Deputy type
export function deputyAttributesMapping(deputy: any) : any {
  const url15 = `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/15`;
  const url30 = `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/30`;
  const url60 = `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/60`;
  const url120 = `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/120`;
  const urlDynamic = (height: number) => `https://www.nosdeputes.fr/depute/photo/${deputy.slug}/${height}`;
  const nbMandatsTotaux = getSafeArrayLength(deputy.anciens_mandats) + getSafeArrayLength(deputy.autres_mandats) + getSafeArrayLength(deputy.anciens_autres_mandats);
  return assign({}, deputy, {
    image15 : url15,
    image30 : url30,
    image60 : url60,
    image120 : url120,
    imageDynamic: urlDynamic,
    nbMandatsTotaux,
  });
}