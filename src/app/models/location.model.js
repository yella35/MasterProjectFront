export interface LocationObject{
    type:string;
    nom: string;
    adresse: {
        ville: string;
        codePostal: string;
        rue: string;
  };
}
