export interface LocationObject{
    locationType:[{nom:string}];
    nom: string;
    adresse: {
        ville: string;
        codePostal: string;
        rue: string;
  };
}
