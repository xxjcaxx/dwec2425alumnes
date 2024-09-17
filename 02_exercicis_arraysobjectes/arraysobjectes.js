// Intenteu resoldre aquests exercicis sense utilitzar bucles com for, foreach, o for..of

export function extractData(data){
    /*
    Tenim un array d'objectes amb aquesta estructura de l'exemple:
    [
     {
      title: 'Dades de contacte',
      id: 'dadescontacte',
      open: true,
      fields: [
        { title: 'Nom', field: 'username' },
        { title: 'Cognoms', field: 'cognoms' },
        { title: 'Correu Electrònic', field: 'email' },
        { title: 'Correu Electrònic Oficial', field: 'correu_oficial' },
        { title: 'Telèfon', field: 'telefon' },
        { title: 'Adreça', field: 'adreça' },
        { title: 'Localitat', field: 'poble' },
        { title: 'Codi Postal', field: 'c_postal' },
      ]
    },
    {
      title: 'Dades Personals',
      id: 'dadespersonals',
      open: false,
      fields: [
        { title: 'DNI/NIE', field: 'dni' },
        { title: 'Caducitat DNI', field: 'caducitat_dni' },
        { title: 'Foto DNI per Davant', field: 'fotodnidavant', type: 'photo', bucket: 'fotos'},
        { title: 'Foto DNI per Darrere', field: 'fotodnidarrere' , type: 'photo' , bucket: 'fotos'},
        { title: 'Foto personal', field: 'avatar_url' , type: 'photo', bucket: 'fotos' },
        { title: 'Data Naixement', field: 'data_naixement' },
        { title: 'Nacionalitat', field: 'nacionalitat' },
        { title: 'Sexe', field: 'sexe' },
      ]
    },  
    ...

    Volem extreure sols els objectes de dins de l'array 'fields' i d'aquests sols en interessa el 'title' i el 'field'

    El resultat de la funció serà un array d'objectes amb el title i el field. 
    */
}

export function removeBlankData(data){
/*
Aquesta funció accepta un array d'objectes que poden ser molt diversos i elimina els clau-valor que tenen com a valor "", null o undefined.
*/
}